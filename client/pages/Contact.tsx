import { useState, type FormEvent } from "react";
import Footer from "@/components/Footer";
import { BlackGrainBackground, WhiteGrainBackground } from "@/components/Backgrounds";
import { HeroReveal, Reveal } from "@/components/motion/Reveal";
import { asset } from "@/lib/asset";

const headshot = asset("/images/contact/Headshot.png");
const WEB3FORMS_ACCESS_KEY = "28e37d7f-a8da-43bd-9515-4f9eaca1f107";

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
      className={`flex flex-col gap-2 font-sans text-[16px] text-[#1A0A00] sm:text-[18px] ${className}`}
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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(form);
    formData.append("subject", "New contact form submission — Anthony Shrout");
    const fullName = formData.get("fullName");
    if (fullName) formData.append("from_name", String(fullName));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { success: boolean; message?: string };
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email directly.");
    }
  }

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
          <img
            src={headshot}
            alt="Anthony Shrout"
            className="aspect-square w-[180px] border-2 border-black object-cover sm:w-[200px] lg:w-[220px]"
          />
          <h2 className="font-sans text-[28px] font-bold uppercase leading-none text-black sm:text-[32px] lg:text-[36px]">
            Anthony Shrout
          </h2>
          <p className="flex flex-col gap-1 font-sans text-[16px] leading-relaxed text-black sm:text-[18px] lg:text-[20px]">
            <a href="tel:6094686002" className="transition-opacity hover:opacity-70">
              609-468-6002
            </a>
            <a href="mailto:anthonyshrout@gmail.com" className="transition-opacity hover:opacity-70">
              anthonyshrout@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/AnthonyShrout"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              linkedin.com/in/AnthonyShrout
            </a>
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
              className="flex items-center justify-center border-[1.5px] border-black bg-black px-6 py-3 font-sans text-[16px] uppercase text-white transition-colors hover:bg-white hover:text-black sm:text-[18px]"
            >
              Call
            </a>
          </div>
          <p className="font-sans text-[16px] leading-tight text-black sm:text-[18px] lg:text-[20px]">
            <strong className="font-bold">New York Metro Area</strong> Available for
            travel nationally
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex w-full max-w-[736px] flex-col items-stretch gap-8">
          <p className="font-sans text-[16px] leading-snug text-black sm:text-[18px] lg:text-[20px]">
            Whether you have a brief ready or just an idea — reach out. Response
            time is typically within one business day.
          </p>

          {status === "success" ? (
            <div className="flex flex-col gap-4 border-l-2 border-black pl-4">
              <h3 className="font-sans text-[22px] font-bold uppercase leading-tight text-black sm:text-[28px]">
                Message sent.
              </h3>
              <p className="font-sans text-[16px] leading-snug text-black sm:text-[18px] lg:text-[20px]">
                Thanks for reaching out. Anthony will get back to you within one
                business day.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <Field label="Full Name" name="fullName" />
              <Field label="Company / Agency" name="company" />

              <div className="flex flex-col gap-6 sm:flex-row">
                <Field label="Phone Number" name="phone" type="tel" className="sm:w-1/2" />
                <Field label="Email Address" name="email" type="email" className="sm:w-1/2" />
              </div>

              <Field label="Tell us about your project" name="message" as="textarea" rows={6} />

              {status === "error" && (
                <p className="border-l-2 border-red-700 pl-4 font-sans text-[14px] leading-snug text-red-800 sm:text-[16px]">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="self-start border-[1.5px] border-black bg-black px-8 py-3 font-sans text-[18px] uppercase text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </Reveal>
      </WhiteGrainBackground>

      <Footer />
    </div>
  );
}
