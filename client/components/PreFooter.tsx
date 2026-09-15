import { WhiteGrainBackground } from "@/components/Backgrounds";

const shape = "https://api.builder.io/api/v1/image/assets/TEMP/822b6d8bb3d3a8701adc982e870527ef243ff8b5?width=2975";

export default function PreFooter() {
  return (
    <WhiteGrainBackground
      id="contact"
      className="min-h-[500px] scroll-mt-[63px] px-6 py-24 sm:min-h-[600px] md:py-28"
    >
      <img
        src={shape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15 invert"
      />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center text-[#121212]">
        <h2 className="font-sans text-[32px] uppercase leading-none sm:text-[42px] lg:text-[49px]">
          Run the <strong className="font-bold">Moment.</strong>
        </h2>
        <button className="border-[1.5px] border-[#121212] px-8 py-2 font-sans text-[18px] uppercase text-[#121212] transition-colors hover:bg-[#121212] hover:text-white">
          Get In Touch
        </button>
      </div>
    </WhiteGrainBackground>
  );
}
