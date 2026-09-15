import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import {
  BlackGrainBackground,
  WhiteGrainBackground,
} from "@/components/Backgrounds";

const heroBg =
  "https://api.builder.io/api/v1/image/assets/TEMP/84c883c2a00558e51763ee8f60b3131f14074b7e?width=2880";

function AccentMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 136 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.50781 24.96L1.10352 19.5557L6.50781 14.1514V6.50784H14.1514L19.5557 1.10354L24.96 6.50784H32.6035V14.1514L38.0078 19.5557L32.6035 24.96V32.6035H24.96L19.5557 38.0078L14.1514 32.6035H6.50781V24.96Z"
        stroke="currentColor"
        strokeWidth="1.5596"
      />
      <path
        d="M85.8838 35.6709L52.5049 35.6709L69.1943 6.76369L85.8838 35.6709Z"
        stroke="currentColor"
        strokeWidth="1.5596"
      />
      <path
        d="M125.664 2.26979C131.105 2.2698 135.516 6.68092 135.516 12.1223C135.516 17.5638 131.105 21.9749 125.664 21.9749C124.97 21.9749 124.293 21.9022 123.64 21.7659C125.22 23.5133 126.182 25.8295 126.182 28.3704C126.182 33.8116 121.771 38.2227 116.33 38.2229C110.888 38.2229 106.477 33.8117 106.477 28.3704C106.477 25.7793 107.477 23.4222 109.113 21.6634C108.326 21.866 107.5 21.9749 106.65 21.9749C101.208 21.9749 96.7974 17.5638 96.7974 12.1223C96.7974 6.68094 101.209 2.26982 106.65 2.2698C111.196 2.2698 115.021 5.34975 116.157 9.5364C117.293 5.34974 121.117 2.26979 125.664 2.26979ZM116.157 14.7073C115.733 16.2692 114.936 17.6761 113.866 18.8274C114.653 18.6248 115.479 18.5178 116.33 18.5178C117.023 18.5179 117.699 18.5896 118.352 18.7259C117.329 17.594 116.568 16.223 116.157 14.7073Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5596"
      />
    </svg>
  );
}

function ContactButton({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <button
      className={`shrink-0 border-[1.5px] px-5 py-2 font-sans text-[18px] uppercase transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

type Service = {
  tone: "black" | "white";
  title: string;
  description: string;
  includesLabel: string;
  includes: string;
  accent?: "before" | "after";
};

const services: Service[] = [
  {
    tone: "black",
    title: "Corporate Brand Content & Campaigns",
    description:
      "From executive interviews and brand narratives to product launches and internal communications — video content that serves a marketing strategy, not just fills a deliverable. Anthony works directly with marketing teams to develop concepts, manage production, and deliver assets ready for multi-platform use.",
    includesLabel: "Includes",
    includes:
      "concept development · scripting support · production management · post-production · multi-format delivery",
  },
  {
    tone: "white",
    title: "Live Event Video Production",
    description:
      "For events where the production is part of the brand experience. Multi-camera direction, technical production, and on-site leadership for corporate conferences, award shows, brand activations, and experiential marketing events — at any scale.",
    includesLabel: "Includes",
    includes:
      "pre-production planning · multi-camera direction · video switching & playback · projection mapping & blending · on-site technical direction",
  },
  {
    tone: "black",
    title: "Live Streaming & Hybrid Event Production",
    description:
      "Brand-quality live broadcasts for events with audiences beyond the room. From intimate executive roundtables to high-viewership public streams — full technical and creative production managed end to end.",
    includesLabel: "Includes",
    includes:
      "streaming platform setup · encoder & signal management · graphics & lower thirds · remote director services · post-stream VOD delivery",
    accent: "after",
  },
  {
    tone: "white",
    title: "Agency & Marketing Team Production Partnership",
    description:
      "For agencies and in-house marketing teams that need a trusted production partner who can move at their speed, speak their language, and deliver without handholding. Available for project-based engagements, retainer relationships, or on-call production support.",
    includesLabel: "Includes",
    includes:
      "creative consultation · budget planning support · vendor coordination · on-site execution · asset delivery",
    accent: "before",
  },
];

const process = [
  {
    title: "1 Brief",
    description:
      "Tell us what you're building — the event, the campaign, the deadline, the audience. We'll respond with a clear approach and a frank conversation about what's possible.",
  },
  {
    title: "2. Build",
    description:
      "From pre-production through shoot day through post — Anthony manages the full process, keeping stakeholders informed and the production on track.",
  },
  {
    title: "3. Deliver",
    description:
      "Final assets delivered in the formats you need, on time, with the quality your brand requires. No surprises.",
  },
];

function ServiceSection({ tone, title, description, includesLabel, includes, accent }: Service) {
  const isBlack = tone === "black";
  const Wrapper = isBlack ? BlackGrainBackground : WhiteGrainBackground;
  const textColor = isBlack ? "text-white" : "text-[#121212]";
  const borderColor = isBlack ? "border-white" : "border-black";
  const align = isBlack ? "items-start text-left" : "items-end text-right lg:ml-auto";
  const borderSide = isBlack ? "border-l-2" : "border-r-2";

  return (
    <Wrapper className="flex w-full items-center px-6 py-20 sm:px-10 md:px-[30px] md:py-28 lg:py-32">
      <div
        className={`relative mx-auto flex w-full max-w-[858px] flex-col gap-8 ${borderSide} ${borderColor} pl-4 pr-4 ${align}`}
      >
        <div
          className={`flex w-full items-center gap-8 ${isBlack ? "flex-row justify-between" : "flex-row-reverse justify-between"}`}
        >
          <h2 className={`flex-1 font-sans text-[32px] font-bold uppercase leading-tight ${textColor} sm:text-[40px] lg:text-[50px]`}>
            {title}
          </h2>
          {accent && <AccentMark className={`hidden h-8 w-auto shrink-0 sm:block ${textColor}`} />}
        </div>

        <p className={`font-sans text-[18px] leading-tight ${textColor} sm:text-[24px] lg:text-[32px]`}>
          {description}
        </p>

        <ContactButton
          className={isBlack ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-[#121212] hover:bg-black hover:text-white"}
        >
          Get In Touch
        </ContactButton>

        <div
          className={`flex w-full flex-col gap-4 border-y-2 py-4 sm:flex-row sm:items-start sm:gap-8 ${borderColor} ${isBlack ? "" : "sm:flex-row-reverse"}`}
        >
          <span className={`shrink-0 font-sans text-[20px] font-bold uppercase ${textColor} sm:w-[157px]`}>
            {includesLabel}
          </span>
          <span className={`font-sans text-[18px] ${textColor} sm:text-[20px] ${isBlack ? "text-left" : "text-right"}`}>
            {includes}
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

export default function Services() {
  return (
    <div className="w-full bg-white">
      <section
        className="flex min-h-[500px] w-full flex-col items-center justify-end gap-8 bg-cover bg-center bg-no-repeat px-6 pb-16 pt-32 sm:min-h-[600px] sm:pb-20 md:min-h-[774px] md:pb-24 lg:pb-28"
        style={{ backgroundImage: `url('${heroBg}')` }}
      >
        <p className="max-w-[500px] text-center font-sans text-[22px] uppercase leading-tight text-black sm:text-[30px] lg:max-w-[600px] lg:text-[37px]">
          What will you say with <strong className="font-bold">your moment?</strong>
        </p>
        <h1 className="font-about text-[64px] uppercase leading-none text-transparent [-webkit-text-stroke:1.2px_black] sm:text-[100px] lg:text-[119px] lg:[-webkit-text-stroke:1.5px_black]">
          Services
        </h1>
      </section>

      {services.map((service) => (
        <ServiceSection key={service.title} {...service} />
      ))}

      <BlackGrainBackground className="flex w-full flex-col items-center gap-4 px-6 py-20 text-center sm:px-10 md:py-28">
        <div className="relative flex w-full max-w-[404px] flex-col items-center gap-2">
          <div className="flex w-full items-center justify-between gap-4">
            <h2 className="font-sans text-[32px] font-bold uppercase leading-none text-white sm:text-[40px] lg:text-[50px]">
              How it
            </h2>
            <AccentMark className="h-8 w-auto shrink-0 text-white" />
          </div>
          <h2 className="w-full text-center font-about text-[64px] uppercase leading-none text-transparent [-webkit-text-stroke:1.2px_white] sm:text-[100px] lg:text-[128px] lg:[-webkit-text-stroke:1.5px_white]">
            Works
          </h2>
        </div>
      </BlackGrainBackground>

      <WhiteGrainBackground className="flex w-full flex-col items-center px-6 py-20 sm:px-10 md:py-28 lg:py-36">
        <div className="relative mx-auto flex w-full max-w-[900px] flex-col gap-8 border-l-2 border-black pl-4">
          <h2 className="font-sans text-[36px] font-bold uppercase leading-none text-[#121212] sm:text-[46px] lg:text-[50px]">
            Process
          </h2>

          <div className="flex flex-col gap-11">
            {process.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 border-b-2 border-black pb-4"
              >
                <h3 className="font-sans text-[20px] font-bold uppercase text-[#121212] sm:text-[28px]">
                  {item.title}
                </h3>
                <p className="font-sans text-[18px] text-[#121212] sm:text-[24px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </WhiteGrainBackground>

      <PreFooter />

      <Footer />
    </div>
  );
}
