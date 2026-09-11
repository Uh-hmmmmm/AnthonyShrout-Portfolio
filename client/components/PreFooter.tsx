import { BlackGrainBackground } from "@/components/Backgrounds";

const pattern = {
  mobile: "https://api.builder.io/api/v1/image/assets/TEMP/8954823300f0014a9d4fa6f19176f338ae6eecb3?width=956",
  tablet: "https://api.builder.io/api/v1/image/assets/TEMP/1c6ffc0b5a5a69846acf729e64a5c8487a6d24b4?width=1982",
  desktop: "https://api.builder.io/api/v1/image/assets/TEMP/da6c1227425966baf9f53474b83cb3d2b32b5874?width=2880",
};

const shape = "https://api.builder.io/api/v1/image/assets/TEMP/822b6d8bb3d3a8701adc982e870527ef243ff8b5?width=2975";

export default function PreFooter() {
  return (
    <BlackGrainBackground
      id="contact"
      className="min-h-[500px] scroll-mt-[63px] px-6 py-24 sm:min-h-[600px] md:py-28"
      style={{ backgroundImage: `url('${pattern.desktop}')` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url('${pattern.mobile}')` }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block lg:hidden"
        style={{ backgroundImage: `url('${pattern.tablet}')` }}
      />
      <img
        src={shape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white">
        <h2 className="font-sans text-[32px] uppercase leading-none sm:text-[42px] lg:text-[49px]">
          Run the <strong className="font-bold">Moment.</strong>
        </h2>
        <button className="border-[1.5px] border-white px-8 py-2 font-sans text-[18px] uppercase text-white transition-colors hover:bg-white hover:text-black">
          Get In Touch
        </button>
      </div>
    </BlackGrainBackground>
  );
}
