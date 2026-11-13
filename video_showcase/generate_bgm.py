import wave
import math
import struct
import random

SAMPLE_RATE = 44100
DURATION = 105.0 # seconds (enough to cover 100s video + outro padding)
NUM_SAMPLES = int(SAMPLE_RATE * DURATION)

# Chord progression frequencies (Hz) for a sleek, uplifting tech ambient vibe
# Chords: Fmaj9 -> Cmaj7 -> Dm9 -> Am7
chords = [
    # Fmaj9: F3 (174.61), A3 (220.0), C4 (261.63), E4 (329.63), G4 (392.00)
    [174.61, 220.0, 261.63, 329.63, 392.00],
    # Cmaj7: C3 (130.81), G3 (196.0), B3 (246.94), E4 (329.63), G4 (392.00)
    [130.81, 196.0, 246.94, 329.63, 392.00],
    # Dm9: D3 (146.83), A3 (220.0), C4 (261.63), F4 (349.23), E4 (329.63)
    [146.83, 220.0, 261.63, 349.23, 329.63],
    # Am7: A2 (110.0), E3 (164.81), G3 (196.0), C4 (261.63), E4 (329.63)
    [110.0, 164.81, 196.0, 261.63, 329.63]
]

chord_duration = 5.0 # 5 seconds per chord

print("Synthesizing ambient tech soundscape...")
left_channel = []
right_channel = []

for i in range(NUM_SAMPLES):
    t = i / SAMPLE_RATE
    chord_idx = int((t / chord_duration) % len(chords))
    chord = chords[chord_idx]
    
    # Progress within chord for gentle breathing envelope
    chord_t = t % chord_duration
    # Smooth attack and release envelope
    envelope = math.sin((chord_t / chord_duration) * math.pi) ** 0.8
    
    # Global fade in (first 2s) and fade out (last 4s)
    if t < 2.0:
        fade = t / 2.0
    elif t > (DURATION - 4.0):
        fade = max(0.0, (DURATION - t) / 4.0)
    else:
        fade = 1.0

    sample_l = 0.0
    sample_r = 0.0
    
    for f_idx, freq in enumerate(chord):
        # Multi-harmonic warm pad with gentle detuning for chorus/warmth
        pan = (f_idx / (len(chord) - 1)) * 0.6 + 0.2 # spatial spread
        
        # Fundamental + subtle 2nd harmonic
        sig = math.sin(2 * math.pi * freq * t) * 0.6 + \
              math.sin(2 * math.pi * freq * 1.002 * t) * 0.3 + \
              math.sin(2 * math.pi * (freq * 2) * t) * 0.1
              
        sample_l += sig * (1.0 - pan)
        sample_r += sig * pan
        
    # High-frequency sparkling rhythmic pulse (modern fintech arpeggio)
    arp_note_dur = 0.25
    arp_idx = int(t / arp_note_dur) % len(chord)
    arp_freq = chord[arp_idx] * 2.0 # one octave higher
    arp_t = (t % arp_note_dur)
    arp_env = math.exp(-arp_t * 12.0) # snappy pluck decay
    arp_sig = math.sin(2 * math.pi * arp_freq * t) * arp_env * 0.15
    
    sample_l += arp_sig * 0.4
    sample_r += arp_sig * 0.6
    
    vol = 0.16 * envelope * fade
    s_l = int(max(-32767, min(32767, sample_l * vol * 32767)))
    s_r = int(max(-32767, min(32767, sample_r * vol * 32767)))
    
    left_channel.append(s_l)
    right_channel.append(s_r)

out_wav = "/home/aryaman-tomar/Desktop/nexbank/video_showcase/bgm.wav"
with wave.open(out_wav, "wb") as wav_file:
    wav_file.setnchannels(2)
    wav_file.setsampwidth(2)
    wav_file.setframerate(SAMPLE_RATE)
    
    frames = bytearray()
    for l, r in zip(left_channel, right_channel):
        frames.extend(struct.pack("<hh", l, r))
    wav_file.writeframes(frames)

print(f"BGM audio synthesized successfully: {out_wav}")
