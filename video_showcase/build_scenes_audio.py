import subprocess
import json
import os

scenes = [
    {
        "id": 1,
        "title": "WELCOME TO NEXBANK",
        "subtitle": "Modern Digital Banking Web Platform",
        "image": "fig_b1_homepage.png",
        "text": "Welcome to NexBank — modern banking re-engineered for a brighter tomorrow. Built with React, TypeScript, and high-performance glassmorphic design, NexBank delivers an ultra-fast, seamless digital banking experience directly in your browser."
    },
    {
        "id": 2,
        "title": "01 | DIGITAL ONBOARDING",
        "subtitle": "Paperless 3-Step Instant Account Opening",
        "image": "fig_4_4_account_opening.png",
        "text": "Opening an account takes under two minutes. Experience frictionless paperless onboarding with instant verification, automated account and IFSC allocation, and immediate virtual debit card activation."
    },
    {
        "id": 3,
        "title": "02 | SMART DASHBOARD",
        "subtitle": "Real-Time Cashflow & Virtual Metal Card",
        "image": "fig_4_5_dashboard.png",
        "text": "At the heart of the platform is the Online Banking Dashboard. Monitor real-time cashflow metrics, track transaction streams, and manage your virtual metal card with instant CVV reveal and security freeze toggles."
    },
    {
        "id": 4,
        "title": "03 | CORE FINANCIAL SERVICES",
        "subtitle": "Simulated IMPS, NEFT, RTGS & UPI Transfers",
        "image": "fig_4_6_services_transfer.png",
        "text": "NexBank makes moving money effortless. With live interactive simulators for IMPS, NEFT, RTGS, and instant UPI transfers, along with automated utility bill payments, your daily finances are always at your command."
    },
    {
        "id": 5,
        "title": "04 | FINANCIAL INTELLIGENCE",
        "subtitle": "Dynamic Loan EMI & SIP Wealth Calculators",
        "image": "fig_4_7_loans_calculator.png",
        "text": "Plan for the future with integrated financial intelligence. Calculate loan EMIs dynamically with real-time sliders, and forecast long-term wealth accumulation using our interactive SIP and investment calculators."
    },
    {
        "id": 6,
        "title": "05 | ENTERPRISE & SUPPORT",
        "subtitle": "Commercial Suite & 24/7 Ticket Tracking",
        "image": "fig_b2_business_banking.png",
        "text": "For enterprises, NexBank delivers trade finance, commercial accounts, and developer APIs. And with a comprehensive support portal, real-time ticket tracking, and twenty-four-seven live chat, assistance is always within reach."
    },
    {
        "id": 7,
        "title": "06 | SECURITY & ARCHITECTURE",
        "subtitle": "AES-256 Encryption & Modern Component Design",
        "image": "fig_3_1_architecture.png",
        "text": "Engineered with AES-256 cryptographic standards, responsive design, and instant dark and light themes, NexBank sets the benchmark for next-generation web banking. Experience NexBank today!"
    }
]

out_dir = "/home/aryaman-tomar/Desktop/nexbank/video_showcase"
os.makedirs(out_dir, exist_ok=True)

with open(f"{out_dir}/scenes.json", "w") as f:
    json.dump(scenes, f, indent=2)

print("Generating audio and subtitles for each scene...")
for sc in scenes:
    idx = sc["id"]
    audio_path = f"{out_dir}/scene_{idx}.mp3"
    sub_path = f"{out_dir}/scene_{idx}.vtt"
    cmd = [
        "edge-tts",
        "--voice", "en-US-ChristopherNeural",
        "--rate", "+3%",
        "--text", sc["text"],
        "--write-media", audio_path,
        "--write-subtitles", sub_path
    ]
    subprocess.run(cmd, check=True)
    
    # get duration via ffprobe
    probe_cmd = [
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", audio_path
    ]
    dur = float(subprocess.check_output(probe_cmd).decode().strip())
    sc["duration"] = dur
    print(f"Scene {idx}: duration={dur:.2f}s")

with open(f"{out_dir}/scenes_with_durations.json", "w") as f:
    json.dump(scenes, f, indent=2)

print("Done! Total duration:", sum(s["duration"] for s in scenes))
