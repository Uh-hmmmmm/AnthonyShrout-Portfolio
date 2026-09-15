import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import BroadcastingCredits from "@/components/BroadcastingCredits";
import { BlackGrainBackground, WhiteGrainBackground } from "@/components/Backgrounds";

function OnLocationIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 226 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M129.231 62.397L134.221 57.4063L129.231 52.4157V45.3606H122.17L117.185 40.37L112.194 45.3606H105.134V52.4157L100.143 57.4063L105.134 62.397V69.4521H112.194L117.185 74.4427L122.17 69.4521H129.231V62.397Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M141.495 39.3406C152.894 50.7396 152.894 69.2462 141.495 80.6451L120.842 101.297L100.19 80.6451C88.791 69.2462 88.791 50.7396 100.19 39.3406C111.589 27.9416 130.096 27.9416 141.495 39.3406Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M137.81 35.6523C149.209 47.0512 149.209 65.5578 137.81 76.9568L117.158 97.609L96.5055 76.9568C85.1103 65.554 85.1103 47.0474 96.5055 35.6523C107.904 24.2533 126.411 24.2533 137.81 35.6523Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
    </svg>
  );
}

function InTruckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 226 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M155.178 68.8434C155.178 76.9418 148.614 83.5061 140.515 83.5061C132.417 83.5061 125.861 76.9418 125.861 68.8434C125.861 60.7449 132.425 54.1807 140.515 54.1807C148.605 54.1807 155.178 60.7449 155.178 68.8434Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M171.5 63.2264H155.177C155.177 55.128 148.613 48.5637 140.515 48.5637C132.416 48.5637 125.86 55.128 125.86 63.2264H97.6498C97.6498 55.128 91.0855 48.5637 82.9871 48.5637C74.8886 48.5637 68.3244 55.128 68.3244 63.2264H54.5V21.7617H130.035C152.939 21.7617 171.5 40.3228 171.5 63.2264Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M88.5941 82.388C96.0757 79.289 99.6285 70.7118 96.5295 63.2302C93.4306 55.7487 84.8534 52.1959 77.3718 55.2948C69.8902 58.3938 66.3374 66.971 69.4364 74.4526C72.5353 81.9342 81.1126 85.487 88.5941 82.388Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M155.178 75.3741C155.178 83.4726 148.614 90.0369 140.515 90.0369C132.417 90.0369 125.861 83.4726 125.861 75.3741C125.861 67.2757 132.425 60.7114 140.515 60.7114C148.605 60.7114 155.178 67.2757 155.178 75.3741Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M88.5951 88.9244C96.0767 85.8254 99.6295 77.2482 96.5305 69.7666C93.4316 62.285 84.8543 58.7322 77.3728 61.8312C69.8912 64.9302 66.3384 73.5074 69.4374 80.989C72.5363 88.4705 81.1135 92.0233 88.5951 88.9244Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
    </svg>
  );
}

function InEditIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 226 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M116.818 73.1771L81.814 52.9705V93.3927L116.818 73.1771Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M151.83 73.1771L116.817 52.9705V93.3927L151.83 73.1771Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M129.986 34.2675H96.0142C76.9525 34.2675 61.5 49.718 61.5 68.7772C61.5 87.8364 76.9525 103.287 96.0142 103.287H129.986C149.047 103.287 164.5 87.8364 164.5 68.7772C164.5 49.718 149.047 34.2675 129.986 34.2675Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M129.986 44.0104H96.0142C76.9525 44.0104 61.5 59.4609 61.5 78.5201C61.5 97.5793 76.9525 113.03 96.0142 113.03H129.986C149.047 113.03 164.5 97.5793 164.5 78.5201C164.5 59.4609 149.047 44.0104 129.986 44.0104Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
    </svg>
  );
}

function AtTableIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 226 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5 35.166H201.499C201.499 41.6381 196.247 46.8903 189.775 46.8903H36.2243C29.7522 46.8903 24.5 41.6381 24.5 35.166Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M111.78 33.4888L91.042 69.4071H132.517L111.78 33.4888Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M111.78 46.8904L91.042 82.8087H132.517L111.78 46.8904Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
    </svg>
  );
}

function GoodsAccent({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 136 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.50781 24.96L1.10352 19.5557L6.50781 14.1514V6.50784H14.1514L19.5557 1.10354L24.96 6.50784H32.6035V14.1514L38.0078 19.5557L32.6035 24.96V32.6035H24.96L19.5557 38.0078L14.1514 32.6035H6.50781V24.96Z" stroke="black" strokeWidth="1.5596" />
      <path d="M85.8838 35.6709L52.5049 35.6709L69.1943 6.76369L85.8838 35.6709Z" stroke="black" strokeWidth="1.5596" />
      <path
        d="M125.664 2.26979C131.105 2.2698 135.516 6.68092 135.516 12.1223C135.516 17.5638 131.105 21.9749 125.664 21.9749C124.97 21.9749 124.293 21.9022 123.64 21.7659C125.22 23.5133 126.182 25.8295 126.182 28.3704C126.182 33.8116 121.771 38.2227 116.33 38.2229C110.888 38.2229 106.477 33.8117 106.477 28.3704C106.477 25.7793 107.477 23.4222 109.113 21.6634C108.326 21.866 107.5 21.9749 106.65 21.9749C101.208 21.9749 96.7974 17.5638 96.7974 12.1223C96.7974 6.68094 101.209 2.26982 106.65 2.2698C111.196 2.2698 115.021 5.34975 116.157 9.5364C117.293 5.34974 121.117 2.26979 125.664 2.26979ZM116.157 14.7073C115.733 16.2692 114.936 17.6761 113.866 18.8274C114.653 18.6248 115.479 18.5178 116.33 18.5178C117.023 18.5179 117.699 18.5896 118.352 18.7259C117.329 17.594 116.568 16.223 116.157 14.7073Z"
        fill="none"
        stroke="black"
        strokeWidth="1.5596"
      />
    </svg>
  );
}

const callouts = [
  "Brand Activations",
  "Executive Communications",
  "Live Streams",
  "Content Campaigns",
];

const handlingCards = [
  { Icon: OnLocationIcon, title: "On Location", desc: "Production + Technical Direction" },
  { Icon: InTruckIcon, title: "In The Truck", desc: "Live Broadcast + Show Operations" },
  { Icon: InEditIcon, title: "In The Edit", desc: "Post Production + Content" },
  { Icon: AtTableIcon, title: "At The Table", desc: "Client + Budget + Vendor Management" },
];

const goods = [
  {
    title: "Corporate Marketing Content",
    desc: "Brand campaigns · Executive communications · Product storytelling",
  },
  {
    title: "Live Event Production",
    desc: "Technical direction · Multi-camera · Projection mapping · Large-venue execution",
  },
  {
    title: "Live Streaming & Hybrid Events",
    desc: "End-to-end digital broadcast · Brand + entertainment",
  },
  {
    title: "Broadcast & Sports Media",
    desc: "NBC Sports · ESPN · NEP Broadcasting · Feld Entertainment",
  },
  {
    title: "Agency Production Leadership",
    desc: "Budget ownership · Client management · Vendor procurement",
  },
];

function OutlineButton({ children }: { children: string }) {
  return (
    <button className="border-[1.5px] border-white px-8 py-2 font-sans text-[18px] uppercase text-white transition-colors hover:bg-white hover:text-black">
      {children}
    </button>
  );
}

export default function About() {
  return (
    <div className="w-full bg-white">
      <WhiteGrainBackground className="flex min-h-[500px] w-full flex-col overflow-hidden px-6 pb-0 pt-32 sm:min-h-[600px] md:min-h-[728px]">
        <div className="relative z-10 flex flex-1 items-center justify-center text-center">
          <p className="font-sans text-[16px] font-bold uppercase text-black sm:text-[20px] lg:text-[26px]">
            The producer behind the production
          </p>
        </div>
        <div className="relative z-10 flex translate-y-[25%] justify-center text-center">
          <h1 className="flex items-center font-about text-[70px] uppercase leading-none text-transparent [-webkit-text-stroke:1.5px_black] sm:text-[130px] lg:[-webkit-text-stroke:2px_black] lg:text-[220px]">
            <span className="inline-block -translate-y-[12%] font-blackletter normal-case">A</span>
            bout
          </h1>
        </div>
      </WhiteGrainBackground>

      <BlackGrainBackground className="flex w-full flex-col items-center gap-12 px-6 py-20 sm:px-10 md:py-28 lg:flex-row lg:items-start lg:justify-center lg:gap-6 lg:px-14 lg:py-32">
        <div className="relative order-2 flex flex-col items-center gap-3 text-center lg:order-1 lg:w-[300px] lg:items-end lg:gap-3 lg:border-r-2 lg:border-white lg:pr-5 lg:text-right">
          {callouts.map((item) => (
            <span key={item} className="font-sans text-[16px] uppercase text-white sm:text-[20px] lg:text-[22px]">
              {item}
            </span>
          ))}
        </div>

        <div className="relative order-1 flex max-w-[520px] flex-col items-center gap-8 text-center lg:order-2 lg:items-center">
          <p className="font-sans text-[18px] leading-snug text-white sm:text-[22px] lg:text-[24px]">
            Anthony Shrout is a New York-based <strong className="font-bold">video producer</strong> and{" "}
            <strong className="font-bold">technical director</strong> working across{" "}
            <strong className="font-bold">corporate marketing, live events, and broadcast media.</strong> He
            brings strategic thinking and hands-on production experience to for leading organizations across{" "}
            <strong className="font-bold">hospitality, technology, finance, and culture.</strong>
          </p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <OutlineButton>My Work</OutlineButton>
            <OutlineButton>Get In Touch</OutlineButton>
          </div>
        </div>
      </BlackGrainBackground>

      <WhiteGrainBackground className="flex w-full flex-col items-center gap-16 px-6 py-20 sm:px-10 md:py-28 lg:py-36">
        <div className="relative flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="font-sans text-[36px] font-normal uppercase leading-none text-[#121212] sm:text-[46px] lg:text-[50px]">
            <strong className="font-bold">Handling</strong> the hard parts
          </h2>
          <p className="font-sans text-[16px] leading-snug text-[#121212] sm:text-[18px] lg:text-[20px]">
            From location to production truck to edit suite, Anthony stays close to the work—bringing
            creative, technical, and production expertise to complex projects from first brief through final
            delivery.
          </p>
        </div>

        <div className="relative grid w-full max-w-[1200px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {handlingCards.map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3 text-center text-[#121212]">
              <Icon className="h-20 w-full max-w-[180px]" />
              <h3 className="font-sans text-[24px] font-bold uppercase leading-tight sm:text-[28px]">{title}</h3>
              <p className="font-sans text-[16px] leading-snug sm:text-[18px]">{desc}</p>
            </div>
          ))}
        </div>
      </WhiteGrainBackground>

      <BlackGrainBackground className="flex w-full items-center justify-center px-6 py-20 sm:px-14 md:py-28 lg:py-32">
        <blockquote className="relative max-w-[900px] border-l-2 border-white pl-4 text-left font-sans text-[28px] uppercase leading-[0.9] text-white sm:text-[36px] lg:text-[44px]">
          &ldquo;Execution is the strategy. Everything else is planning.&rdquo;-AS
        </blockquote>
      </BlackGrainBackground>

      <WhiteGrainBackground className="flex w-full items-center justify-center px-6 py-20 sm:px-14 md:py-28 lg:py-32">
        <div className="relative flex w-full max-w-[1000px] flex-col gap-8 border-l-2 border-black pl-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-sans text-[36px] font-bold uppercase leading-none text-[#121212] sm:text-[46px] lg:text-[50px]">
              The Goods
            </h2>
            <GoodsAccent className="hidden h-8 w-auto sm:block" />
          </div>

          <div className="flex flex-col gap-8">
            {goods.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 border-b-2 border-black pb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <h3 className="font-sans text-[18px] font-bold uppercase leading-tight text-[#121212] sm:w-[300px] sm:shrink-0 sm:text-[22px]">
                  {item.title}
                </h3>
                <p className="font-sans text-[16px] leading-snug text-[#121212] sm:text-right sm:text-[18px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </WhiteGrainBackground>

      <BroadcastingCredits />

      <PreFooter />

      <Footer />
    </div>
  );
}
