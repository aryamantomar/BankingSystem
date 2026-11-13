import asyncio
import edge_tts

TEXT = """Welcome to NexBank, modern banking re-engineered for a brighter tomorrow. Built with React, TypeScript, and high-performance glassmorphic design, NexBank delivers an ultra-fast, seamless digital banking experience directly in your browser.

Opening an account takes under two minutes. Experience paperless onboarding with instant verification, automated account and IFSC allocation, and immediate virtual debit card activation.

At the heart of the platform is the Online Banking Dashboard. Monitor real-time cashflow metrics, track transaction streams, and manage your virtual metal card with instant CVV reveal and security freeze toggles.

NexBank makes moving money effortless. With live interactive simulators for IMPS, NEFT, RTGS, and instant UPI transfers, along with automated utility bill payments, your daily finances are always at your command.

Plan for the future with integrated financial intelligence. Calculate loan EMIs dynamically with real-time sliders, and forecast long-term wealth accumulation using our mutual fund and SIP investment calculators.

For enterprises, NexBank delivers trade finance, commercial accounts, and developer APIs. And with a comprehensive support portal, real-time ticket tracking, and 24/7 live chat, assistance is always within reach.

Engineered with AES-256 cryptographic standards, responsive design, and instant dark and light themes, NexBank sets the benchmark for next-generation web banking. Experience NexBank today!"""

VOICE = "en-US-ChristopherNeural"
OUTPUT_AUDIO = "/home/aryaman-tomar/Desktop/nexbank/video_showcase/narration.mp3"
OUTPUT_SUBTITLES = "/home/aryaman-tomar/Desktop/nexbank/video_showcase/subtitles.vtt"

async def main():
    communicate = edge_tts.Communicate(TEXT, VOICE, rate="+3%", pitch="+0Hz")
    submaker = edge_tts.SubMaker()
    
    with open(OUTPUT_AUDIO, "wb") as file:
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                file.write(chunk["data"])
            elif chunk["type"] == "WordBoundary":
                submaker.feed(chunk)

    with open(OUTPUT_SUBTITLES, "w", encoding="utf-8") as file:
        file.write(submaker.get_srt())
    print("Audio and subtitles generated successfully!")

if __name__ == "__main__":
    asyncio.run(main())
