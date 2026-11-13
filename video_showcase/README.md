# NexBank Official Faceless Video Showcase

A Full HD (1920x1080 @ 30fps) faceless product introduction and architectural walkthrough video for **NexBank — Modern Banking for a Brighter Tomorrow**.

---

## 🎬 Video Overview

- **File Name**: `NexBank_Official_Website_Showcase.mp4` (Web copy: `public/nexbank_showcase.mp4`)
- **Format**: MP4 (H.264 / AAC Stereo)
- **Resolution**: 1920 x 1080 (16:9 Full HD)
- **Duration**: ~100 seconds (1 minute 40 seconds)
- **Voiceover**: Microsoft Neural Speech (`en-US-ChristopherNeural` studio voice)
- **Audio Mix**: Neural narration balanced with custom synthesized ambient tech soundscape (-19 dB ducking)
- **Subtitles & Captions**:
  - **Burned-in**: High-contrast, modern styled captions (`.ass`) with semi-transparent charcoal backing pills for maximum readability across all screens.
  - **Animated Progress Bar**: Slim brand magenta progress indicator (`#ec4899`) tracking playback in real time.
  - **External Subtitles**: Provided in both `.srt` and `.vtt` formats for HTML5 `<track>` tags, YouTube, LinkedIn, or video hosting platforms.

---

## 🧭 Storyboard & Chapter Breakdown

| Time | Chapter | Focus & On-Screen UI |
|---|---|---|
| **00:00 - 00:15** | **Welcome to NexBank** | Platform introduction, value proposition, tech stack (React, TypeScript, Tailwind CSS, Glassmorphism). |
| **00:15 - 00:28** | **01 \| Digital Onboarding** | Frictionless 3-step paperless onboarding wizard, instant KYC, automated account & IFSC allocation, virtual debit card issuance. |
| **00:28 - 00:42** | **02 \| Smart Dashboard** | Command-center online banking portal, real-time cashflow metrics, interactive virtual metal card (CVV reveal & freeze toggles), transaction feeds. |
| **00:42 - 00:57** | **03 \| Core Financial Services** | Live interactive simulators for IMPS, NEFT, RTGS, and instant UPI fund transfers, automated utility bill payments. |
| **00:57 - 01:11** | **04 \| Financial Intelligence** | Real-time dynamic Loan EMI calculator with custom sliders and compound SIP wealth accumulation engines. |
| **01:11 - 01:26** | **05 \| Enterprise & Support** | Commercial banking suite, merchant APIs, trade finance, 24/7 ticket tracker, and instant live chat assistance. |
| **01:26 - 01:40** | **06 \| Security & Modern Architecture** | AES-256 cryptographic standards, responsive dark/light modes, client-side state architecture, and concluding call-to-action. |

---

## 📁 Generated Assets & Files

```
nexbank/
├── public/
│   ├── nexbank_showcase.mp4       # Production video served to web app (12 MB)
│   ├── nexbank_showcase.vtt       # WebVTT subtitle track
│   └── nexbank_showcase.srt       # SRT subtitle file
└── video_showcase/
    ├── NexBank_Official_Website_Showcase.mp4  # Master render
    ├── nexbank_showcase_subtitles.srt          # Master SRT captions
    ├── nexbank_showcase_subtitles.vtt          # Master VTT captions
    ├── nexbank_showcase_subtitles.ass          # Styled ASS subtitles
    ├── scenes_with_durations.json              # Timing & scene metadata
    ├── bgm.wav                                 # Synthesized ambient tech pad
    ├── create_scene_canvas.py                  # Pillow UI canvas compositor
    ├── generate_bgm.py                         # BGM synthesizer script
    ├── build_scenes_audio.py                   # Edge-TTS generator
    ├── build_master_subtitles.py               # Subtitle cue compiler
    └── render_full_video.py                    # Master FFmpeg production pipeline
```

---

## 🚀 How to Play & Test

### 1. View Inside the Website:
Start the dev or preview server:
```bash
npm run dev
# or
npm run preview
```
- Click the **"Watch Video Tour"** button in the Top Notification Bar, Desktop Navbar, or the Hero Section banner.
- The interactive video modal opens with full chapter seeking, playback speed controls, and one-click download buttons.

### 2. Standalone Playback:
Play directly with any media player (VLC, mpv, browser):
```bash
mpv video_showcase/NexBank_Official_Website_Showcase.mp4
```
