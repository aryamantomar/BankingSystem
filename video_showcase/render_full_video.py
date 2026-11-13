import subprocess
import json
import os

out_dir = "/home/aryaman-tomar/Desktop/nexbank/video_showcase"
scenes_file = f"{out_dir}/scenes_with_durations.json"

with open(scenes_file) as f:
    scenes = json.load(f)

print("Step 1: Rendering individual scene video clips with motion...")
scene_clips = []
for sc in scenes:
    idx = sc["id"]
    dur = sc["duration"]
    canvas = f"{out_dir}/canvas_scene_{idx}.jpg"
    audio = f"{out_dir}/scene_{idx}.mp3"
    clip_out = f"{out_dir}/clip_{idx}.mp4"
    scene_clips.append(clip_out)
    
    # Calculate frames: dur * 30 fps
    total_frames = int(dur * 30) + 1
    
    # Alternate zoom & pan directions for dynamic visual variety
    if idx % 2 == 1:
        # Slow center zoom in
        zp_filter = f"zoompan=z='min(zoom+0.00035,1.05)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={total_frames}:s=1920x1080:fps=30"
    else:
        # Subtle upward pan
        zp_filter = f"zoompan=z=1.04:x='iw/2-(iw/zoom/2)':y='(ih-ih/zoom)*(1-on/{total_frames})':d={total_frames}:s=1920x1080:fps=30"
    
    cmd = [
        "ffmpeg", "-y",
        "-loop", "1", "-i", canvas,
        "-i", audio,
        "-filter_complex",
        f"[0:v]scale=1920:1080,{zp_filter},format=yuv420p[v]",
        "-map", "[v]", "-map", "1:a",
        "-c:v", "libx264", "-preset", "veryfast", "-crf", "19",
        "-c:a", "aac", "-b:a", "192k", "-ar", "44100",
        "-t", f"{dur:.3f}",
        clip_out
    ]
    subprocess.run(cmd, check=True)
    print(f"Rendered clip {idx} ({dur:.2f}s)")

# Step 2: Create concat list
concat_list_file = f"{out_dir}/concat_list.txt"
with open(concat_list_file, "w") as f:
    for c in scene_clips:
        f.write(f"file '{c}'\n")

print("Step 2: Concatenating clips into unified raw video...")
raw_video = f"{out_dir}/raw_concatenated.mp4"
concat_cmd = [
    "ffmpeg", "-y",
    "-f", "concat", "-safe", "0", "-i", concat_list_file,
    "-c", "copy",
    raw_video
]
subprocess.run(concat_cmd, check=True)

# Step 3: Mix background music and burn subtitles + animated progress bar
print("Step 3: Burning master subtitles, animated progress bar, and audio mixing with BGM...")
final_output = f"{out_dir}/NexBank_Official_Website_Showcase.mp4"
total_dur = sum(s["duration"] for s in scenes)
ass_file = f"{out_dir}/nexbank_showcase_subtitles.ass"

# Filter complex:
# [0:v] subtitles and progress bar
# [0:a] voice narration at volume 1.0
# [1:a] bgm volume lowered to 0.12, trimmed to total duration, then mixed
final_cmd = [
    "ffmpeg", "-y",
    "-i", raw_video,
    "-i", f"{out_dir}/bgm.wav",
    "-filter_complex",
    f"[0:v]subtitles={ass_file},drawbox=x=0:y=ih-5:w='iw*(t/{total_dur:.2f})':h=5:color=0xec4899@1:t=fill[v];"
    f"[1:a]volume=0.11[bgm];"
    f"[0:a][bgm]amix=inputs=2:duration=first:dropout_transition=2[a]",
    "-map", "[v]", "-map", "[a]",
    "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-b:a", "256k", "-ar", "44100",
    "-t", f"{total_dur:.3f}",
    final_output
]

subprocess.run(final_cmd, check=True)
print(f"VIDEO RENDER COMPLETE! Output: {final_output}")

# Copy final video and captions to public directory so it can also be served / downloaded from web app
public_dir = "/home/aryaman-tomar/Desktop/nexbank/public"
os.system(f"cp '{final_output}' '{public_dir}/nexbank_showcase.mp4'")
os.system(f"cp '{out_dir}/nexbank_showcase_subtitles.vtt' '{public_dir}/nexbank_showcase.vtt'")
os.system(f"cp '{out_dir}/nexbank_showcase_subtitles.srt' '{public_dir}/nexbank_showcase.srt'")
print("Copied video and subtitles to /public/ for web embedding!")
