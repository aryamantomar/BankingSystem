import subprocess

# Generate ASS for Scene 1
ass_content = """[Script Info]
ScriptType: v4.00+
PlayResX: 1920
PlayResY: 1080
WrapStyle: 0
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,DejaVu Sans,32,&H00FFFFFF,&H000000FF,&H00000000,&H800a0e17,-1,0,0,0,100,100,0.5,0,3,14,0,2,60,60,40,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:00.10,0:00:04.91,Default,,0,0,0,,Welcome to NexBank — modern banking re-engineered for a brighter tomorrow.
Dialogue: 0,0:00:04.91,0:00:10.20,Default,,0,0,0,,Built with React, TypeScript, and high-performance glassmorphic design...
Dialogue: 0,0:00:10.20,0:00:15.10,Default,,0,0,0,,...NexBank delivers an ultra-fast, seamless digital banking experience in your browser.
"""

with open("/home/aryaman-tomar/Desktop/nexbank/video_showcase/scene_1.ass", "w") as f:
    f.write(ass_content)

# FFmpeg command to produce Scene 1 video with subtle zoom and subtitles
# Using filter_complex: zoompan then subtitles
cmd = [
    "ffmpeg", "-y",
    "-loop", "1", "-i", "/home/aryaman-tomar/Desktop/nexbank/video_showcase/canvas_scene_1.jpg",
    "-i", "/home/aryaman-tomar/Desktop/nexbank/video_showcase/scene_1.mp3",
    "-filter_complex",
    "[0:v]scale=1920:1080,zoompan=z='min(zoom+0.0003,1.04)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=455:s=1920x1080:fps=30,subtitles=/home/aryaman-tomar/Desktop/nexbank/video_showcase/scene_1.ass[v]",
    "-map", "[v]", "-map", "1:a",
    "-c:v", "libx264", "-preset", "fast", "-crf", "20", "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-b:a", "192k",
    "-shortest",
    "/home/aryaman-tomar/Desktop/nexbank/video_showcase/test_scene_1.mp4"
]

print("Rendering test scene 1...")
res = subprocess.run(cmd, capture_output=True, text=True)
if res.returncode != 0:
    print("Error:", res.stderr)
else:
    print("Success! Scene 1 rendered.")
