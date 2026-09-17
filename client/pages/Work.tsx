import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import Reels from "@/components/Reels";
import BroadcastingCredits from "@/components/BroadcastingCredits";
import { BlackGrainBackground } from "@/components/Backgrounds";
import { HeroReveal, Reveal } from "@/components/motion/Reveal";

const heroWords = ["Let", "the", "work", "Speak."];

const projects = [
  {
    client: "NTT",
    title: "PTC Event (Late Night Experience), Live Stream PH1",
    note: "10 produced videos for marketing and communications departments",
  },
  {
    client: "Red Bull",
    title: "Whiskey Jam Festival, Ascend Amphitheatre",
  },
  {
    client: "Marriott Bonvoy",
    title: "Projection Mapping, Nashville",
  },
  {
    client: "Bloomberg",
    title: "TV Investment Summit (Technical Direction)",
  },
  {
    client: "Metropolitan Museum of Art",
    title: "Virtual Tour & Live Stream",
  },
  {
    client: "Philadelphia Museum of Art",
    title: "Jasper Johns Exhibition PR",
  },
  {
    client: "Flik Hospitality Group",
    title: "50+ video campaigns",
  },
  {
    client: "Concours D\u2019Elegance",
    title: "Greenwich & Amelia Island",
  },
];

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

      <BlackGrainBackground className="flex w-full items-center justify-center px-6 py-20 sm:px-14 md:py-28 lg:py-32">
        <Reveal className="relative flex w-full max-w-[1000px] flex-col gap-10 border-l-2 border-white pl-4">
          <div className="flex items-end justify-between gap-4 border-b-2 border-white pb-3">
            <h2 className="font-sans text-[36px] font-bold uppercase leading-none text-white sm:text-[46px] lg:text-[50px]">
              Highlighted Projects
            </h2>
            <span className="font-sans text-[16px] uppercase tracking-[0.2em] text-white/60 sm:text-[18px]">
              {projects.length}
            </span>
          </div>

          <ul className="flex flex-col gap-6">
            {projects.map((item, index) => (
              <Reveal key={item.client} delay={index * 0.05}>
                <li className="flex flex-col gap-2 border-b border-white/40 pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <h3 className="font-sans text-[18px] font-bold uppercase leading-tight text-white sm:w-[300px] sm:shrink-0 sm:text-[22px]">
                    {item.client}
                  </h3>
                  <div className="flex flex-col gap-1 sm:pt-1 sm:text-right">
                    <p className="font-sans text-[16px] leading-snug text-white sm:text-[18px]">
                      {item.title}
                    </p>
                    {item.note && (
                      <p className="font-sans text-[14px] leading-snug text-white/70 sm:text-[15px]">
                        {item.note}
                      </p>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </BlackGrainBackground>

      <BroadcastingCredits />

      <PreFooter />

      <Footer />
    </div>
  );
}
