import json
import re

with open("/home/aryaman-tomar/Desktop/nexbank/video_showcase/scenes_with_durations.json") as f:
    scenes = json.load(f)

# Helper to parse VTT timestamp to seconds
def vtt_time_to_seconds(t_str):
    parts = t_str.strip().replace(",", ".").split(":")
    if len(parts) == 3:
        return float(parts[0]) * 3600 + float(parts[1]) * 60 + float(parts[2])
    elif len(parts) == 2:
        return float(parts[0]) * 60 + float(parts[1])
    return float(parts[0])

def seconds_to_srt_time(sec):
    hrs = int(sec // 3600)
    mins = int((sec % 3600) // 60)
    secs = int(sec % 60)
    msecs = int(round((sec - int(sec)) * 1000))
    if msecs >= 1000:
        msecs = 999
    return f"{hrs:02d}:{mins:02d}:{secs:02d},{msecs:03d}"

def seconds_to_vtt_time(sec):
    hrs = int(sec // 3600)
    mins = int((sec % 3600) // 60)
    secs = int(sec % 60)
    msecs = int(round((sec - int(sec)) * 1000))
    if msecs >= 1000:
        msecs = 999
    return f"{hrs:02d}:{mins:02d}:{secs:02d}.{msecs:03d}"

def seconds_to_ass_time(sec):
    hrs = int(sec // 3600)
    mins = int((sec % 3600) // 60)
    secs = int(sec % 60)
    cs = int(round((sec - int(sec)) * 100))
    if cs >= 100:
        cs = 99
    return f"{hrs:01d}:{mins:02d}:{secs:02d}.{cs:02d}"

master_cues = []
cumulative_offset = 0.0

for sc in scenes:
    vtt_file = f"/home/aryaman-tomar/Desktop/nexbank/video_showcase/scene_{sc['id']}.vtt"
    with open(vtt_file, "r", encoding="utf-8") as f:
        lines = [l.strip() for l in f if l.strip()]
        
    i = 0
    while i < len(lines):
        line = lines[i]
        if line == "WEBVTT":
            i += 1
            continue
        # Check if line is index
        if line.isdigit():
            i += 1
            if i >= len(lines): break
            line = lines[i]
            
        if "-->" in line:
            start_str, end_str = line.split("-->")
            start_sec = vtt_time_to_seconds(start_str) + cumulative_offset
            end_sec = vtt_time_to_seconds(end_str) + cumulative_offset
            i += 1
            text_lines = []
            while i < len(lines) and not lines[i].isdigit() and "-->" not in lines[i]:
                text_lines.append(lines[i])
                i += 1
            text = " ".join(text_lines)
            
            # If text is very long, split into two even chunks for readability
            if len(text) > 75 and (end_sec - start_sec) > 4.0:
                words = text.split()
                mid = len(words) // 2
                part1 = " ".join(words[:mid])
                part2 = " ".join(words[mid:])
                mid_time = start_sec + (end_sec - start_sec) * (len(part1) / len(text))
                master_cues.append({"start": start_sec, "end": mid_time, "text": part1})
                master_cues.append({"start": mid_time, "end": end_sec, "text": part2})
            else:
                master_cues.append({"start": start_sec, "end": end_sec, "text": text})
        else:
            i += 1
            
    cumulative_offset += sc["duration"]

# Write Master SRT
out_dir = "/home/aryaman-tomar/Desktop/nexbank/video_showcase"
srt_path = f"{out_dir}/nexbank_showcase_subtitles.srt"
with open(srt_path, "w", encoding="utf-8") as f:
    for idx, cue in enumerate(master_cues, 1):
        f.write(f"{idx}\n")
        f.write(f"{seconds_to_srt_time(cue['start'])} --> {seconds_to_srt_time(cue['end'])}\n")
        f.write(f"{cue['text']}\n\n")

# Write Master VTT
vtt_path = f"{out_dir}/nexbank_showcase_subtitles.vtt"
with open(vtt_path, "w", encoding="utf-8") as f:
    f.write("WEBVTT - NexBank Showcase Subtitles\n\n")
    for idx, cue in enumerate(master_cues, 1):
        f.write(f"{idx}\n")
        f.write(f"{seconds_to_vtt_time(cue['start'])} --> {seconds_to_vtt_time(cue['end'])}\n")
        f.write(f"{cue['text']}\n\n")

# Write Master ASS for Burned-in Subtitles with pill style
ass_path = f"{out_dir}/nexbank_showcase_subtitles.ass"
with open(ass_path, "w", encoding="utf-8") as f:
    f.write("""[Script Info]
ScriptType: v4.00+
PlayResX: 1920
PlayResY: 1080
WrapStyle: 0
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,DejaVu Sans,33,&H00FFFFFF,&H000000FF,&H00000000,&H900a0e17,-1,0,0,0,100,100,0.5,0,3,16,0,2,80,80,48,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
""")
    for cue in master_cues:
        f.write(f"Dialogue: 0,{seconds_to_ass_time(cue['start'])},{seconds_to_ass_time(cue['end'])},Default,,0,0,0,,{cue['text']}\n")

print(f"Master subtitles successfully generated! Total cues: {len(master_cues)}")
print(f"Total video duration: {cumulative_offset:.2f} seconds")
