import { Link } from "react-router-dom";
import { WhiteGrainBackground } from "@/components/Backgrounds";
import { Reveal } from "@/components/motion/Reveal";
import { asset } from "@/lib/asset";

const grainCircle = asset("/images/backgrounds/Grain Circle.png");

export default function PreFooter() {
  return (
    <WhiteGrainBackground
      id="contact"
      className="min-h-[500px] scroll-mt-[63px] px-6 py-24 sm:min-h-[600px] md:py-28"
    >
      <img
        src={grainCircle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-auto w-[720px] max-w-none -translate-x-1/2 -translate-y-[38%] object-contain sm:w-[900px] md:w-[1100px] lg:w-[1300px]"
      />
      <Reveal className="relative z-10 flex flex-col items-center gap-6 text-center text-white">
        <h2 className="font-sans text-[32px] uppercase leading-none sm:text-[42px] lg:text-[49px]">
          Run the <strong className="font-bold">Moment.</strong>
        </h2>
        <Link
          to="/contact"
          className="border-[1.5px] border-white px-8 py-2 font-sans text-[18px] uppercase text-white transition-colors hover:bg-white hover:text-black"
        >
          Get In Touch
        </Link>
      </Reveal>
    </WhiteGrainBackground>
  );
}
