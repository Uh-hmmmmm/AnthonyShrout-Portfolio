export default function Index() {
  return (
    <div
      className="min-h-screen w-full bg-[#f2f2f2]"
      style={{
        backgroundImage:
          "url('https://api.builder.io/api/v1/image/assets/TEMP/d5fec36934099c7afca954529e187abdcbe6056c?width=3842')",
        backgroundSize: "50px 50px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col px-6 py-20 sm:px-10 sm:py-28 md:py-36 lg:py-44">
        <div className="flex flex-col gap-6 border-l-2 border-black pl-5 sm:gap-8 sm:pl-8">
          {/* Portrait with name overlay */}
          <div
            className="relative flex h-56 items-end bg-[#c7c7c7] bg-cover bg-center p-4 sm:h-72 sm:p-6 md:h-80"
            style={{
              backgroundImage:
                "url('https://api.builder.io/api/v1/image/assets/TEMP/28cab38fd6538d7e54e8c35221444e52b776de74?width=1274')",
            }}
          >
            <span className="font-sans text-xl font-normal uppercase text-white sm:text-2xl md:text-[32px]">
              Anthony Shrout
            </span>
          </div>

          {/* Heading */}
          <div className="relative">
            <h1 className="font-sans text-[2.75rem] font-bold uppercase leading-[0.95] text-[#1d1d1d] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Trusted with the moment.
            </h1>
            <div className="pointer-events-none absolute -right-1 bottom-0 hidden h-[50px] w-[50px] sm:block">
              <div className="absolute left-0 top-0 h-[35px] w-[35px] rotate-45 bg-[#d9d9d9]" />
              <div className="absolute left-[7px] top-[7px] h-[35px] w-[35px] bg-[#d9d9d9]" />
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-10">
            <button className="border-2 border-[#121212] px-6 py-3 font-sans text-lg uppercase text-[#121212] transition-colors hover:bg-[#121212] hover:text-white sm:text-2xl">
              My Work
            </button>
            <button className="bg-black px-6 py-3 font-sans text-lg uppercase text-white transition-colors hover:bg-[#121212]/90 sm:text-2xl">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Grain text effect banner */}
      <div className="mx-auto w-full max-w-4xl px-6 pb-16 sm:px-16 sm:pb-24">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a06e36637033d511049a90a8611ac7a31fe45ea6?width=2122"
          alt=""
          className="w-full"
          style={{ aspectRatio: "1061 / 170", mixBlendMode: "multiply" }}
        />
      </div>
    </div>
  );
}
