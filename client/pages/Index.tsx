import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import Reels from "@/components/Reels";
import { BlackGrainBackground, WhiteGrainBackground } from "@/components/Backgrounds";
import { HeroReveal, Reveal } from "@/components/motion/Reveal";
import { Link } from "react-router-dom";

const starAsset = "/images/hero/Star.svg";
function StarBurst({ className = "" }: { className?: string }) {
  return <img src={starAsset} alt="" aria-hidden="true" className={`object-contain ${className}`} />;
}

function TriangleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5195 30.4658L4.14063 30.4658L20.8301 1.5586L37.5195 30.4658Z" stroke="white" strokeWidth="1.5596" />
    </svg>
  );
}

function CloverIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.8662 1.72267e-06C34.3076 1.0564e-05 38.7187 4.41113 38.7188 9.85254C38.7188 15.294 34.3076 19.7051 28.8662 19.7051C28.1726 19.7051 27.4959 19.6324 26.8428 19.4961C28.4222 21.2435 29.3848 23.5597 29.3848 26.1006C29.3847 31.5418 24.9734 35.9529 19.5322 35.9531C14.0909 35.9531 9.67979 31.5419 9.67969 26.1006C9.67969 23.5095 10.68 21.1524 12.3154 19.3936C11.5282 19.5962 10.7031 19.7051 9.85254 19.7051C4.41113 19.7051 2.67408e-06 15.294 1.72267e-06 9.85255C1.95779e-05 4.41115 4.41114 2.45687e-05 9.85254 5.04713e-06C14.3988 4.25223e-06 18.2233 3.07996 19.3594 7.2666C20.4955 3.07995 24.3199 2.51757e-06 28.8662 1.72267e-06ZM19.3594 12.4375C18.9357 13.9994 18.1387 15.4063 17.0684 16.5576C17.8557 16.355 18.6817 16.2481 19.5322 16.2481C20.2255 16.2481 20.9019 16.3198 21.5547 16.4561C20.5318 15.3242 19.7705 13.9532 19.3594 12.4375Z" fill="white" />
    </svg>
  );
}

const logoSources = [
  "/images/logos/client_logos/Redbull.png",
  "/images/logos/client_logos/Bloomberg.png",
  "/images/logos/client_logos/Marriot.png",
  "/images/logos/client_logos/Ntt.png",
  "/images/logos/client_logos/TheMet.png",
  "/images/logos/client_logos/PhiladelphiaMusuemOfArt.png",
  "/images/logos/client_logos/Flik.png",
  "/images/logos/client_logos/ConcourseDeElegance.png",
];

function Stat({ value, children }: { value: string; children: string }) {
  return <div className="flex min-h-[116px] flex-1 flex-col items-center justify-center px-4 text-center text-white md:min-h-0 md:px-3"><strong className="font-sans text-[42px] font-bold uppercase leading-none md:text-[36px] lg:text-[60px]">{value}</strong><span className="max-w-[265px] text-[18px] leading-tight md:text-[16px] lg:text-[26px]">{children}</span></div>;
}


export default function Index() {
  return (
    <div id="top" className="w-full bg-white">
      <WhiteGrainBackground className="w-full">
        <section className="relative z-10 flex min-h-[764px] w-full items-center justify-center overflow-hidden px-6 py-16 sm:px-10 md:min-h-[933px] md:px-[227px] md:py-24 lg:px-[451px] lg:py-[244px]">
        <div className="relative flex w-full max-w-[537px] flex-col items-start gap-4 border-l-2 border-black pl-4 md:gap-[17px] md:pl-4 lg:w-[537px] lg:max-w-none">
          <HeroReveal delay={0} className="relative flex h-[137px] w-full items-start justify-end overflow-hidden p-3 md:h-[213px] md:p-4 lg:w-[537px]">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero/anthony-portrait.png')" }} />
            <span className="relative font-sans text-[26px] font-normal uppercase leading-none text-white">Anthony Shrout</span>
          </HeroReveal>
          <HeroReveal delay={0.15} className="relative w-full lg:w-[519px]">
            <h1 className="font-sans text-[40px] font-bold uppercase leading-[0.95] text-[#1d1d1d] md:text-[61px] lg:text-[67px]">Trusted with the moment.</h1>
            <StarBurst className="pointer-events-none hidden h-[41px] w-[41px] md:absolute md:-right-1 md:bottom-2 md:block" />
          </HeroReveal>
          <HeroReveal delay={0.3} className="flex w-full flex-col items-stretch gap-3 md:w-auto md:flex-row md:items-center md:gap-8">
            <Link to="/work" className="inline-flex items-center justify-center border-[1.5px] border-[#121212] px-5 py-[5px] font-sans text-[18px] uppercase text-[#121212] transition-colors hover:bg-[#121212] hover:text-white lg:w-[225px]">My Work</Link>
            <Link to="/contact" className="inline-flex items-center justify-center border-[1.5px] border-black bg-black px-5 py-[5px] font-sans text-[18px] uppercase text-white transition-colors hover:bg-white hover:text-black lg:w-[262px]">Get In Touch</Link>
          </HeroReveal>
        </div>
      </section>

      <Reveal className="relative z-10 flex w-full items-center justify-center overflow-hidden bg-transparent px-0 py-0">
        <img className="w-full max-w-[1061px] mix-blend-multiply md:hidden" src="/images/hero/Nameplate-mobile.png" alt="Anthony Shrout" />
        <img className="hidden w-full max-w-[1061px] mix-blend-multiply md:block lg:hidden" src="/images/hero/Nameplate-tablet.png" alt="Anthony Shrout" />
        <img className="hidden w-full max-w-[1061px] mix-blend-multiply lg:block" src="/images/hero/Nameplate.png" alt="Anthony Shrout" />
      </Reveal>
      </WhiteGrainBackground>

      <BlackGrainBackground id="services" className="flex w-full items-center px-6 py-20 sm:px-10 md:px-[30px] md:py-[151px] lg:px-[30px] lg:py-[151px]">
        <Reveal className="relative mx-auto flex w-full max-w-[931px] flex-col items-start gap-6 border-l-[1.56px] border-white pl-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col items-start gap-6 md:gap-[17px]">
            <p className="max-w-[418px] text-left text-[32px] font-normal uppercase leading-[0.95] text-white sm:max-w-[520px] md:max-w-[600px] lg:max-w-[700px] lg:text-[38px]">The space between a great <span className="font-bold">idea</span> and a great <span className="font-bold">production</span> is <span className="font-bold">experience</span>.</p>
            <Link to="/work" className="inline-flex items-center justify-center border-[1.5px] border-white px-5 py-[5px] font-sans text-[18px] uppercase text-white transition-colors hover:bg-white hover:text-black">My Work</Link>
          </div>
          <div className="flex items-center gap-4"><StarBurst className="h-[30px] w-[30px]" /><TriangleIcon className="h-[24px] w-[32px]" /><CloverIcon className="h-[27px] w-[29px]" /></div>
        </Reveal>
      </BlackGrainBackground>

      <Reels />

      <BlackGrainBackground className="px-6 py-10 md:px-[66px] md:py-14 lg:py-[56px]">
        <Reveal className="relative mx-auto flex max-w-[1308px] flex-col divide-y divide-white/70 md:flex-row md:divide-x md:divide-y-0">
          <Stat value="15+">Years in Cooperate &amp; Event Production</Stat><Stat value="50+">Brand Campaign Projects</Stat><Stat value="National">Broadcast &amp; Live Event Credits</Stat>
        </Reveal>
      </BlackGrainBackground>

      <WhiteGrainBackground id="about" className="scroll-mt-[63px] px-6 py-24 md:px-[50px] md:py-[140px] lg:px-[calc((100%-758px)/2)] lg:py-[162px]">
        <div className="relative mx-auto flex max-w-[760px] flex-col gap-3">
          <Reveal>
            <header className="flex items-center justify-between border-b border-black pb-2"><h2 className="font-sans text-[38px] font-bold uppercase leading-none text-[#121212] sm:text-[54px]">About</h2><svg className="h-8 w-8" viewBox="0 0 43 41" fill="none"><path d="M4.18 10.99h33.95L21.16 39.42 4.18 10.99Z" stroke="black" strokeWidth="1.53" /></svg></header>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[18px] leading-tight text-[#121212] sm:text-[20px] lg:text-[28px]"><strong>Anthony Shrout </strong>produces high-stakes live events and brand experiences where there’s no room for guesswork. For <strong>15+ years</strong>, he’s brought the creative judgment, technical command, and calm execution needed to make the moment work.</p>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-col justify-end gap-3 pt-2 sm:flex-row">
            <Link to="/work" className="inline-flex items-center justify-center border-[1.5px] border-[#121212] px-8 py-2 font-sans text-[18px] uppercase text-[#121212] transition-colors hover:bg-[#121212] hover:text-white">My Work</Link><Link to="/contact" className="inline-flex items-center justify-center border-[1.5px] border-[#121212] bg-[#121212] px-8 py-2 font-sans text-[18px] uppercase text-white transition-colors hover:bg-white hover:text-[#121212]">Get In Touch</Link>
          </Reveal>
        </div>
      </WhiteGrainBackground>

      <BlackGrainBackground className="px-6 py-8 md:px-[116px] md:py-9 lg:px-[22px] lg:py-12">
        <Reveal className="mx-auto grid max-w-[1396px] grid-cols-2 items-center gap-3 md:grid-cols-4 lg:flex lg:justify-between lg:gap-4">{logoSources.map((src, index) => <img key={src + index} src={src} alt="Client logo" className="h-24 w-full object-contain md:h-32 lg:h-[107px] lg:w-[143px]" />)}</Reveal>
      </BlackGrainBackground>

      <PreFooter />

      <Footer />
    </div>
  );
}
