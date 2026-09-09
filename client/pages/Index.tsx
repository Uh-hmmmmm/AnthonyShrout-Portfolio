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
    <svg
      className={className}
      viewBox="0 0 42 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.5195 30.4658L4.14063 30.4658L20.8301 1.5586L37.5195 30.4658Z"
        stroke="white"
        strokeWidth="1.5596"
      />
    </svg>
  );
}

function CloverIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 39 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.8662 1.72267e-06C34.3076 1.0564e-05 38.7187 4.41113 38.7188 9.85254C38.7188 15.294 34.3076 19.7051 28.8662 19.7051C28.1726 19.7051 27.4959 19.6324 26.8428 19.4961C28.4222 21.2435 29.3848 23.5597 29.3848 26.1006C29.3847 31.5418 24.9734 35.9529 19.5322 35.9531C14.0909 35.9531 9.67979 31.5419 9.67969 26.1006C9.67969 23.5095 10.68 21.1524 12.3154 19.3936C11.5282 19.5962 10.7031 19.7051 9.85254 19.7051C4.41113 19.7051 2.67408e-06 15.294 1.72267e-06 9.85255C1.95779e-05 4.41115 4.41114 2.45687e-05 9.85254 5.04713e-06C14.3988 4.25223e-06 18.2233 3.07996 19.3594 7.2666C20.4955 3.07995 24.3199 2.51757e-06 28.8662 1.72267e-06ZM19.3594 12.4375C18.9357 13.9994 18.1387 15.4063 17.0684 16.5576C17.8557 16.355 18.6817 16.2481 19.5322 16.2481C20.2255 16.2481 20.9019 16.3198 21.5547 16.4561C20.5318 15.3242 19.7705 13.9532 19.3594 12.4375Z"
        fill="white"
      />
    </svg>
  );
}

export default function Index() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative flex w-full items-center justify-center overflow-hidden px-6 py-16 sm:px-10 md:px-[227px] md:py-24 lg:px-[451px] lg:py-[244px]">
        <div
          className="absolute inset-0 bg-[length:50px_50px] bg-repeat md:hidden"
          style={{
            backgroundImage:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/19c8027101bba3041f18168d9aa7bd3e84ffab14?width=956')",
          }}
        />
        <div
          className="absolute inset-0 hidden bg-[length:50px_50px] bg-repeat md:block lg:hidden"
          style={{
            backgroundImage:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/936969f2a77a466e497859c3e7052f45bf8a5641?width=1982')",
          }}
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-center lg:block"
          style={{
            backgroundImage:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/41b62691ef2c321a21063596a97a25a905729b41?width=2880')",
          }}
        />

        <div className="relative flex w-full max-w-[537px] flex-col items-start gap-4 border-l-2 border-black pl-4 md:gap-[17px] md:pl-4">
          {/* Portrait with name overlay */}
          <div className="relative flex h-[137px] w-full items-end overflow-hidden p-3 md:h-[213px] md:p-4">
            <div
              className="absolute inset-0 bg-cover bg-center md:hidden"
              style={{
                backgroundImage:
                  "url('https://api.builder.io/api/v1/image/assets/TEMP/aed865d3003e7d8b8524221ecee86180d6fb1225?width=762')",
              }}
            />
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                backgroundImage:
                  "url('https://api.builder.io/api/v1/image/assets/TEMP/d3789a5debe2851ff09d5f8b155ebd1dfadac505?width=1038')",
                backgroundSize: "169.432% 230.596%",
                backgroundPosition: "-130px -120px",
                backgroundRepeat: "no-repeat",
              }}
            />
            <span className="relative font-sans text-[26px] font-normal uppercase leading-none text-white">
              Anthony Shrout
            </span>
          </div>

          {/* Heading */}
          <div className="relative w-full">
            <h1 className="font-sans text-[40px] font-bold uppercase leading-[0.95] text-[#1d1d1d] md:text-[54px] lg:text-[67px]">
              Trusted with the moment.
            </h1>
            <StarBurst className="pointer-events-none hidden h-[41px] w-[41px] md:absolute md:-right-1 md:bottom-2 md:block" />
          </div>

          {/* CTAs */}
          <div className="flex w-full flex-col items-stretch gap-3 md:w-auto md:flex-row md:items-center md:gap-8">
            <button className="border-[1.63px] border-[#121212] px-5 py-[5px] font-sans text-[20px] uppercase text-[#121212] transition-colors hover:bg-[#121212] hover:text-white">
              My Work
            </button>
            <button className="bg-black px-5 py-[5px] font-sans text-[20px] uppercase text-white transition-colors hover:bg-[#121212]/90">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Grain text banner */}
      <div className="flex w-full items-center justify-center overflow-hidden bg-white px-6 py-6 md:px-0">
        <img
          className="hidden w-full max-w-[1061px] mix-blend-multiply lg:block"
          src="https://api.builder.io/api/v1/image/assets/TEMP/a06e36637033d511049a90a8611ac7a31fe45ea6?width=2122"
          alt="Anthony"
          style={{ aspectRatio: "1061 / 170" }}
        />
        <img
          className="hidden w-full max-w-[1061px] mix-blend-multiply md:block lg:hidden"
          src="https://api.builder.io/api/v1/image/assets/TEMP/5e16a9004f0b8e3558f72936c877dd68d2c26ee8?width=2122"
          alt="Anthony"
          style={{ aspectRatio: "1061 / 170" }}
        />
        <img
          className="w-full max-w-[548px] mix-blend-multiply md:hidden"
          src="https://api.builder.io/api/v1/image/assets/TEMP/65dd283d0555f501725cf9bc214fe08e68e9fcc5?width=1096"
          alt="Anthony"
          style={{ aspectRatio: "548 / 87.8" }}
        />
      </div>

      {/* Quote section */}
      <section className="relative flex w-full items-center overflow-hidden px-6 py-20 sm:px-10 md:px-[30px] md:py-[151px] lg:px-[291px] lg:py-[151px]">
        <div
          className="absolute inset-0 bg-[length:50px_50px] bg-repeat"
          style={{
            backgroundImage:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/6afd15da29f7f68838c257b8964d146a476cc506?width=956')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative flex w-full max-w-[931px] flex-col items-start gap-6 border-l-[1.56px] border-white pl-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col items-start gap-6 md:gap-[17px]">
            <p className="max-w-[418px] text-left text-[32px] font-normal uppercase leading-[0.95] text-white sm:max-w-[520px] md:max-w-[600px] lg:max-w-[700px] lg:text-[38px]">
              The space between a great <span className="font-bold">idea</span>{" "}
              and a great <span className="font-bold">production</span> is{" "}
              <span className="font-bold">experience</span>.
            </p>
            <button className="border-[1.56px] border-white px-5 py-[5px] font-sans text-[20px] uppercase text-white transition-colors hover:bg-white hover:text-black">
              My Work
            </button>
          </div>

          <div className="flex items-center gap-4">
            <StarBurst tone="dark" className="h-[30px] w-[30px]" />
            <TriangleIcon className="h-[24px] w-[32px]" />
            <CloverIcon className="h-[27px] w-[29px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
