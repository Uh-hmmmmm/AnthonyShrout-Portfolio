import { WhiteGrainBackground } from "@/components/Backgrounds";

const reelsAccentLeft =
  "https://cdn.builder.io/api/v1/image/assets%2F0fed82f307b44ac3aa54a5572c541467%2F0b8de29430b54e08b5b1367d3cb989db";
const reelsAccentRight =
  "https://cdn.builder.io/api/v1/image/assets%2F0fed82f307b44ac3aa54a5572c541467%2Fd50f2356ed234c60ab7407d662fb71d6";

function ReelsMark() {
  return (
    <svg
      className="h-9 w-10 sm:h-12 sm:w-[52px]"
      viewBox="0 0 52 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1328 47.9248C5.87968 47.9245 0 42.0442 0 34.791C0 27.538 5.87981 21.6585 13.1328 21.6582C14.0568 21.6582 14.959 21.754 15.8291 21.9355C13.7242 19.6064 12.4424 16.5194 12.4424 13.1328C12.4424 5.87956 18.322 0.000108 25.5752 0C32.8285 0 38.7089 5.8795 38.709 13.1328C38.709 16.5856 37.376 19.727 35.1973 22.0713C36.2458 21.8017 37.3449 21.6582 38.4775 21.6582C45.7307 21.6582 51.6111 27.5379 51.6113 34.791C51.6113 42.0444 45.7309 47.9248 38.4775 47.9248C32.4214 47.9247 27.3237 43.8252 25.8057 38.25C24.2876 43.8253 19.1891 47.9248 13.1328 47.9248ZM25.8057 31.333C26.3711 29.2562 27.4338 27.3851 28.8574 25.8535C27.8084 26.1234 26.7084 26.2666 25.5752 26.2666C24.651 26.2666 23.7492 26.1699 22.8789 25.9883C24.2401 27.4943 25.2568 29.3171 25.8057 31.333Z"
        stroke="#121212"
        strokeWidth="1.51"
      />
    </svg>
  );
}

function ReelCard({
  title,
  image,
  reverse = false,
}: {
  title: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <article
      className={`flex flex-col gap-2 overflow-hidden ${reverse ? "items-end border-r-[3px] pr-2" : "items-start border-l-[3px] pl-2"} border-black`}
    >
      <h3
        className={`w-full font-sans text-[18px] font-bold uppercase leading-tight text-[#121212] sm:text-[27px] ${reverse ? "text-right" : "text-left"}`}
      >
        {title}
      </h3>
      <div className="relative w-full overflow-hidden">
        <img src={image} alt={title} className="aspect-[152/85] w-full object-cover" />
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 sm:h-[158px] sm:w-[158px]">
          <span className="ml-1 block h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-white sm:border-y-[30px] sm:border-l-[52px]" />
        </div>
      </div>
    </article>
  );
}

export default function Reels({ className = "" }: { className?: string }) {
  return (
    <WhiteGrainBackground
      className={`min-h-[900px] px-2 py-16 sm:px-10 md:min-h-[1100px] md:px-[94px] lg:min-h-[1278px] lg:px-[94px] lg:py-16 2xl:px-[346px] ${className}`}
    >
      <div className="relative mx-auto flex w-full max-w-[748px] flex-col items-center gap-11 md:max-w-[748px] lg:max-w-[748px] 2xl:max-w-[1100px]">
        <header className="flex w-full items-end justify-between border-b-[3px] border-black pb-3">
          <ReelsMark />
          <h2 className="font-sans text-[38px] font-bold uppercase leading-none text-[#121212] sm:text-[53px]">
            REELS
          </h2>
        </header>
        <div className="flex w-full flex-col gap-8">
          <ReelCard
            title="Producer | Technical Director"
            image="https://api.builder.io/api/v1/image/assets/TEMP/59b8441dba9d7a319a74e6805fe20f4b4366cc2f?width=890"
          />
          <ReelCard
            title="Producer | Editor"
            image="https://api.builder.io/api/v1/image/assets/TEMP/45b1be1bd8e7abfcc897e9c67d67ae78737790fa?width=890"
            reverse
          />
        </div>
        <button className="border-[1.5px] border-[#121212] px-8 py-2 font-sans text-[18px] uppercase text-[#121212] transition-colors hover:bg-[#121212] hover:text-white sm:px-10">
          Contact Me
        </button>
      </div>
      <img
        src={reelsAccentLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-[31%] hidden h-[215px] w-[282.5px] max-w-none object-contain lg:block lg:h-[260px] lg:w-[340px]"
      />
      <img
        src={reelsAccentRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-[31%] hidden h-[215px] w-[282.5px] max-w-none object-contain lg:block lg:h-[260px] lg:w-[340px]"
      />
    </WhiteGrainBackground>
  );
}
