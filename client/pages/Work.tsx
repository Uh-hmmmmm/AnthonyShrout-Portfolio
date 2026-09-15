import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import Reels from "@/components/Reels";
import BroadcastingCredits from "@/components/BroadcastingCredits";
import { BlackGrainBackground } from "@/components/Backgrounds";
import { HeroReveal } from "@/components/motion/Reveal";

const heroWords = ["Let", "the", "work", "Speak."];

export default function Work() {
  return (
    <div className="w-full bg-white">
      <BlackGrainBackground className="flex min-h-[400px] w-full items-center justify-center px-6 pt-24 sm:min-h-[460px] md:min-h-[520px] md:pt-16">
        <div className="flex w-full max-w-[640px] flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-between">
          {heroWords.map((word, index) => (
            <HeroReveal key={word} delay={index * 0.12}>
              <span className="font-sans text-[20px] font-bold uppercase text-white sm:text-[26px]">
                {word}
              </span>
            </HeroReveal>
          ))}
        </div>
      </BlackGrainBackground>

      <Reels />

      <BroadcastingCredits />

      <PreFooter />

      <Footer />
    </div>
  );
}
