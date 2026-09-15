import Footer from "@/components/Footer";
import { BlackGrainBackground, WhiteGrainBackground } from "@/components/Backgrounds";
import { HeroReveal, Reveal } from "@/components/motion/Reveal";

function Field({
  label,
  name,
  type = "text",
  as = "input",
  rows,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  className?: string;
}) {
  return (
    <label
      className={`flex flex-col gap-2 font-sans text-[20px] text-[#1A0A00] sm:text-[24px] ${className}`}
    >
      {label}
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          className="w-full resize-none border border-black bg-white px-4 py-3 font-sans text-[16px] text-black outline-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          className="w-full border border-black bg-white px-4 py-3 font-sans text-[16px] text-black outline-none"
        />
      )}
    </label>
  );
}

export default function Contact() {
  return (
    <div className="w-full bg-white">
      <BlackGrainBackground className="flex min-h-[220px] w-full items-end justify-start px-6 pb-6 pt-28 sm:min-h-[260px] sm:px-10 md:min-h-[290px] md:px-14 md:pb-8">
        <HeroReveal>
          <h1 className="font-about text-[60px] uppercase leading-none text-transparent [-webkit-text-stroke:1.5px_white] sm:text-[90px] lg:[-webkit-text-stroke:2px_white] lg:text-[119px]">
            Contact
          </h1>
        </HeroReveal>
      </BlackGrainBackground>

      <WhiteGrainBackground className="flex w-full flex-col items-stretch gap-16 px-6 py-16 sm:px-10 md:py-24 lg:flex-row lg:items-start lg:justify-center lg:gap-11 lg:px-14 lg:py-[151px]">
        <Reveal className="flex w-full max-w-[484px] flex-col items-start gap-8 border-l-2 border-black pl-4 text-left lg:pl-[17px]">
          <h2 className="font-sans text-[36px] font-bold uppercase leading-none text-black sm:text-[42px] lg:text-[50px]">
            Anthony Shrout
          </h2>
          <p className="font-sans text-[20px] leading-relaxed text-black sm:text-[26px] lg:text-[32px]">
            609-468-6002
            <br />
            anthonyshrout@gmail.com
            <br />
            linkedin.com/in/AnthonyShrout
          </p>
          <div className="flex w-full max-w-[430px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="mailto:anthonyshrout@gmail.com"
              className="flex items-center justify-center border-[1.5px] border-black px-6 py-3 font-sans text-[16px] uppercase text-black transition-colors hover:bg-black hover:text-white sm:text-[18px]"
            >
              Email
            </a>
            <a
              href="tel:6094686002"
              className="flex items-center justify-center bg-black px-6 py-3 font-sans text-[16px] uppercase text-white transition-opacity hover:opacity-80 sm:text-[18px]"
            >
              609 468 6002
            </a>
          </div>
          <p className="font-sans text-[20px] leading-tight text-black sm:text-[26px] lg:text-[32px]">
            <strong className="font-bold">New York Metro Area</strong> Available for
            travel nationally
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex w-full max-w-[736px] flex-col items-stretch gap-8">
          <p className="font-sans text-[18px] leading-snug text-black sm:text-[22px] lg:text-[24px]">
            Whether you have a brief ready or just an idea — reach out. Response
            time is typically within one business day.
          </p>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <Field label="Full Name" name="fullName" />
            <Field label="Company / Agency" name="company" />

            <div className="flex flex-col gap-6 sm:flex-row">
              <Field label="Phone Number" name="phone" type="tel" className="sm:w-1/2" />
              <Field label="Email Address" name="email" type="email" className="sm:w-1/2" />
            </div>

            <Field label="Tell us about your project" name="message" as="textarea" rows={6} />

            <button
              type="submit"
              className="self-start bg-black px-8 py-3 font-sans text-[18px] uppercase text-white transition-opacity hover:opacity-80"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </WhiteGrainBackground>

      <Footer />
    </div>
  );
}
