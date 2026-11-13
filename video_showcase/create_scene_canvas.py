import os
import json
from PIL import Image, ImageDraw, ImageFont, ImageFilter

WIDTH = 1920
HEIGHT = 1080

def create_scene_frame(scene_info, src_img_path, output_path):
    # 1. Base background: deep dark tech gradient
    bg = Image.new("RGBA", (WIDTH, HEIGHT), (11, 15, 25, 255))
    draw = ImageDraw.Draw(bg)
    
    # Subtle gradient or radial glow in center
    for y in range(HEIGHT):
        ratio = y / HEIGHT
        r = int(14 + ratio * (7 - 14))
        g = int(18 + ratio * (10 - 18))
        b = int(28 + ratio * (16 - 28))
        draw.line([(0, y), (WIDTH, y)], fill=(r, g, b, 255))
        
    # Draw soft glowing accent circle in top-right
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    # Magenta/Brand accent glow (#97144d)
    gdraw.ellipse([WIDTH - 700, -200, WIDTH + 300, 700], fill=(151, 20, 77, 35))
    # Cyan/Blue accent glow (#0ea5e9)
    gdraw.ellipse([-200, HEIGHT - 600, 600, HEIGHT + 200], fill=(14, 165, 233, 25))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    bg.alpha_composite(glow)
    
    # 2. Draw Top Navigation / Header Bar
    hdr_draw = ImageDraw.Draw(bg)
    # Top bar background
    hdr_draw.rectangle([0, 0, WIDTH, 100], fill=(15, 20, 32, 220))
    hdr_draw.line([(0, 100), (WIDTH, 100)], fill=(255, 255, 255, 25))
    
    # Fonts
    try:
        font_logo = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 26)
        font_pill = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 16)
        font_title = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 24)
        font_sub = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18)
        font_url = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf", 15)
    except:
        font_logo = font_pill = font_title = font_sub = font_url = ImageFont.load_default()

    # Logo & Brand Name
    hdr_draw.text((70, 35), "NEXBANK", fill=(255, 255, 255, 255), font=font_logo)
    # Brand highlight dot
    hdr_draw.ellipse([215, 45, 225, 55], fill=(236, 72, 153, 255))
    
    # Active Chapter Badge
    chap_box = [260, 32, 600, 68]
    hdr_draw.rounded_rectangle(chap_box, radius=18, fill=(151, 20, 77, 180), outline=(255, 255, 255, 60), width=1)
    hdr_draw.text((280, 40), scene_info["title"], fill=(255, 255, 255, 255), font=font_pill)
    
    # Right-hand side subtitle
    sub_text = scene_info["subtitle"]
    hdr_draw.text((WIDTH - 70 - 450, 40), sub_text, fill=(148, 163, 184, 255), font=font_sub)
    
    # 3. Browser Window Container
    # Desired container size: e.g. 1560 x 800, centered horizontally
    # Position: x=180, y=130
    win_w = 1560
    win_h = 790
    win_x = (WIDTH - win_w) // 2
    win_y = 135
    
    # Draw drop shadow for window
    shadow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.rounded_rectangle([win_x - 10, win_y - 5, win_x + win_w + 10, win_y + win_h + 15], radius=20, fill=(0, 0, 0, 160))
    shadow = shadow.filter(ImageFilter.GaussianBlur(25))
    bg.alpha_composite(shadow)
    
    # Window Frame Base
    win_img = Image.new("RGBA", (win_w, win_h), (26, 32, 46, 255))
    wdraw = ImageDraw.Draw(win_img)
    
    # Title bar
    bar_h = 42
    wdraw.rounded_rectangle([0, 0, win_w, win_h], radius=16, fill=(30, 37, 54, 255))
    wdraw.rectangle([0, bar_h, win_w, win_h], fill=(15, 23, 42, 255))
    
    # Window buttons
    wdraw.ellipse([18, 14, 30, 26], fill=(239, 68, 68, 255)) # Red
    wdraw.ellipse([38, 14, 50, 26], fill=(245, 158, 11, 255)) # Yellow
    wdraw.ellipse([58, 14, 70, 26], fill=(16, 185, 129, 255)) # Green
    
    # Browser URL search bar
    wdraw.rounded_rectangle([win_w//2 - 250, 8, win_w//2 + 250, 34], radius=13, fill=(18, 24, 38, 255))
    url_text = f"https://nexbank.internal/{scene_info['image'].split('_')[1] if '_' in scene_info['image'] else ''}"
    wdraw.text((win_w//2 - 180, 12), url_text, fill=(148, 163, 184, 255), font=font_url)
    
    # 4. Paste Screenshot
    if os.path.exists(src_img_path):
        sc_img = Image.open(src_img_path).convert("RGBA")
        content_w = win_w
        content_h = win_h - bar_h
        
        # Scale screenshot to fit neatly inside the window
        sc_aspect = sc_img.width / sc_img.height
        target_aspect = content_w / content_h
        
        if sc_aspect > target_aspect:
            # wider
            new_w = content_w
            new_h = int(content_w / sc_aspect)
        else:
            # taller or equal
            new_h = content_h
            new_w = int(content_h * sc_aspect)
            
        scaled_sc = sc_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Center horizontally and align to top of content area
        paste_x = (content_w - new_w) // 2
        paste_y = bar_h
        win_img.alpha_composite(scaled_sc, (paste_x, paste_y))
        
    # Draw border around window
    wdraw.rounded_rectangle([0, 0, win_w-1, win_h-1], radius=16, outline=(255, 255, 255, 30), width=1)
    
    # Alpha composite window onto canvas
    bg.alpha_composite(win_img, (win_x, win_y))
    
    # Convert to RGB and save
    final_canvas = bg.convert("RGB")
    final_canvas.save(output_path, quality=95)
    print(f"Saved canvas: {output_path}")

scenes_file = "/home/aryaman-tomar/Desktop/nexbank/video_showcase/scenes_with_durations.json"
with open(scenes_file) as f:
    scenes = json.load(f)

for sc in scenes:
    img_name = sc["image"]
    src_img = f"/home/aryaman-tomar/Desktop/nexbank/report_images/{img_name}"
    out_img = f"/home/aryaman-tomar/Desktop/nexbank/video_showcase/canvas_scene_{sc['id']}.jpg"
    create_scene_frame(sc, src_img, out_img)

print("All scene canvases rendered successfully!")
