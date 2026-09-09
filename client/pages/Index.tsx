function StarBurst({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const fill = tone === "light" ? "bg-[#d9d9d9]" : "bg-transparent border border-white";
  return (
    <div className={`relative ${className}`}>
      <div className={`absolute left-0 top-0 h-[70%] w-[70%] rotate-45 ${fill}`} />
      <div className={`absolute left-[15%] top-[15%] h-[70%] w-[70%] ${fill}`} />
    </div>
  );
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

function ReelsMark() {
  return (
    <svg className="h-9 w-10 sm:h-12 sm:w-[52px]" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1328 47.9248C5.87968 47.9245 0 42.0442 0 34.791C0 27.538 5.87981 21.6585 13.1328 21.6582C14.0568 21.6582 14.959 21.754 15.8291 21.9355C13.7242 19.6064 12.4424 16.5194 12.4424 13.1328C12.4424 5.87956 18.322 0.000108 25.5752 0C32.8285 0 38.7089 5.8795 38.709 13.1328C38.709 16.5856 37.376 19.727 35.1973 22.0713C36.2458 21.8017 37.3449 21.6582 38.4775 21.6582C45.7307 21.6582 51.6111 27.5379 51.6113 34.791C51.6113 42.0444 45.7309 47.9248 38.4775 47.9248C32.4214 47.9247 27.3237 43.8252 25.8057 38.25C24.2876 43.8253 19.1891 47.9248 13.1328 47.9248ZM25.8057 31.333C26.3711 29.2562 27.4338 27.3851 28.8574 25.8535C27.8084 26.1234 26.7084 26.2666 25.5752 26.2666C24.651 26.2666 23.7492 26.1699 22.8789 25.9883C24.2401 27.4943 25.2568 29.3171 25.8057 31.333Z" stroke="#121212" strokeWidth="1.51" />
    </svg>
  );
}

function ReelCard({ title, image, reverse = false }: { title: string; image: string; reverse?: boolean }) {
  return (
    <article className={`flex flex-col gap-2 overflow-hidden ${reverse ? "items-end border-r-[3px] pr-2" : "items-start border-l-[3px] pl-2"} border-black`}>
      <h3 className={`w-full font-sans text-[18px] font-bold uppercase leading-tight text-[#121212] sm:text-[27px] ${reverse ? "text-right" : "text-left"}`}>
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

export default function Index() {
  return (
    <div className="w-full bg-white">
      <div className="relative overflow-hidden bg-[length:50px_50px] bg-repeat">
        <div className="absolute inset-0 bg-[length:50px_50px] bg-repeat md:hidden" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/8c8d3e86c4efb8706a348768ce3ae215de1ef15b?width=956')" }} />
        <div className="absolute inset-0 hidden bg-[length:50px_50px] bg-repeat md:block lg:hidden" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/e12e2662932d0343e4db502a0d06ed2861438bbd?width=1980')" }} />
        <div className="absolute inset-0 hidden bg-[length:50px_50px] bg-repeat lg:block" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/41b62691ef2c321a21063596a97a25a905729b41?width=2880')" }} />
        <section className="relative z-10 flex min-h-[764px] w-full items-center justify-center overflow-hidden px-6 py-16 sm:px-10 md:min-h-[933px] md:px-[227px] md:py-24 lg:px-[451px] lg:py-[244px]">
        <div className="relative flex w-full max-w-[537px] flex-col items-start gap-4 border-l-2 border-black pl-4 md:gap-[17px] md:pl-4">
          <div className="relative flex h-[137px] w-full items-end overflow-hidden p-3 md:h-[213px] md:p-4">
            <div className="absolute inset-0 bg-cover bg-center md:hidden" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/9d522960d55a0d31b5abd019468d65f389a25ed0?width=862')" }} />
            <div className="absolute inset-0 hidden md:block" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/d3789a5debe2851ff09d5f8b155ebd1dfadac505?width=1038')", backgroundSize: "169.432% 230.596%", backgroundPosition: "-130px -120px", backgroundRepeat: "no-repeat" }} />
            <span className="relative font-sans text-[26px] font-normal uppercase leading-none text-white">Anthony Shrout</span>
          </div>
          <div className="relative w-full">
            <h1 className="font-sans text-[40px] font-bold uppercase leading-[0.95] text-[#1d1d1d] md:text-[61px] lg:text-[67px]">Trusted with the moment.</h1>
            <StarBurst className="pointer-events-none hidden h-[41px] w-[41px] md:absolute md:-right-1 md:bottom-2 md:block" />
          </div>
          <div className="flex w-full flex-col items-stretch gap-3 md:w-auto md:flex-row md:items-center md:gap-8">
            <button className="border-[1.63px] border-[#121212] px-5 py-[5px] font-sans text-[20px] uppercase text-[#121212] transition-colors hover:bg-[#121212] hover:text-white">My Work</button>
            <button className="bg-black px-5 py-[5px] font-sans text-[20px] uppercase text-white transition-colors hover:bg-[#121212]/90">Get In Touch</button>
          </div>
        </div>
      </section>

      <div className="relative z-10 flex w-full items-center justify-center overflow-hidden bg-transparent px-0 py-0">
        <img className="hidden w-full max-w-[1061px] mix-blend-multiply lg:block" src="https://api.builder.io/api/v1/image/assets/TEMP/a06e36637033d511049a90a8611ac7a31fe45ea6?width=2122" alt="Anthony" />
        <img className="hidden w-full max-w-[1061px] mix-blend-multiply md:block lg:hidden" src="https://api.builder.io/api/v1/image/assets/TEMP/2dcb3bc35e00e1890fcfb8b7758dfab29c2f9d9b?width=2120" alt="Anthony" />
        <img className="w-full mix-blend-multiply md:hidden" src="https://api.builder.io/api/v1/image/assets/TEMP/40d256d649bc487330cebfd53078ea7e4b846fd5?width=956" alt="Anthony" />
      </div>
      </div>

      <section className="relative flex w-full items-center overflow-hidden px-6 py-20 sm:px-10 md:px-[30px] md:py-[151px] lg:px-[291px] lg:py-[151px]">
        <div className="absolute inset-0 bg-[length:50px_50px] bg-repeat" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/872eb4421166530379c4a733827e95d380a961a8?width=2880')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative flex w-full max-w-[931px] flex-col items-start gap-6 border-l-[1.56px] border-white pl-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col items-start gap-6 md:gap-[17px]">
            <p className="max-w-[418px] text-left text-[32px] font-normal uppercase leading-[0.95] text-white sm:max-w-[520px] md:max-w-[600px] lg:max-w-[700px] lg:text-[38px]">The space between a great <span className="font-bold">idea</span> and a great <span className="font-bold">production</span> is <span className="font-bold">experience</span>.</p>
            <button className="border-[1.56px] border-white px-5 py-[5px] font-sans text-[20px] uppercase text-white transition-colors hover:bg-white hover:text-black">My Work</button>
          </div>
          <div className="flex items-center gap-4"><StarBurst tone="dark" className="h-[30px] w-[30px]" /><TriangleIcon className="h-[24px] w-[32px]" /><CloverIcon className="h-[27px] w-[29px]" /></div>
        </div>
      </section>

      <section className="relative min-h-[900px] overflow-hidden px-2 py-16 sm:px-10 md:min-h-[1100px] md:px-[94px] lg:min-h-[1278px] lg:px-[346px] lg:py-16">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/7ea878d14c15b6bf03b7fdcfca4bb856e7860bba?width=956')" }} />
        <div className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block lg:hidden" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/2ff7542cfed34b54dc9af21d4b28ee166205a3f0?width=1980')" }} />
        <div className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block" style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/bcd52d7c0f91205f7001557b4101e32c61ad2c2e?width=2880')" }} />
        <div className="relative mx-auto flex w-full max-w-[748px] flex-col items-center gap-11">
          <header className="flex w-full items-end justify-between border-b-[3px] border-black pb-3">
            <ReelsMark />
            <h2 className="font-sans text-[38px] font-bold uppercase leading-none text-[#121212] sm:text-[53px]">REELS</h2>
          </header>
          <div className="flex w-full flex-col gap-8">
            <ReelCard title="Producer | Technical Director" image="https://api.builder.io/api/v1/image/assets/TEMP/59b8441dba9d7a319a74e6805fe20f4b4366cc2f?width=890" />
            <ReelCard title="Producer | Editor" image="https://api.builder.io/api/v1/image/assets/TEMP/45b1be1bd8e7abfcc897e9c67d67ae78737790fa?width=890" reverse />
          </div>
          <button className="border border-[#121212] px-8 py-2 font-sans text-sm uppercase text-[#121212] sm:px-10 sm:text-lg">Contact Me</button>
        </div>
        <span className="pointer-events-none absolute -left-32 top-[40%] hidden font-serif text-[360px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.2)] lg:block">A</span>
        <span className="pointer-events-none absolute -right-32 top-[40%] hidden font-serif text-[360px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.2)] lg:block">S</span>
      </section>
    </div>
  );
}
