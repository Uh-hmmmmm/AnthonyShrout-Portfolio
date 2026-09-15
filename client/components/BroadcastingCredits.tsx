import { BlackGrainBackground } from "@/components/Backgrounds";

const creditsBg =
  "https://api.builder.io/api/v1/image/assets/TEMP/d3036b7f365228fe8d85f483391f2da0e7fc3dc9?width=2880";

export default function BroadcastingCredits({ className = "" }: { className?: string }) {
  return (
    <BlackGrainBackground
      className={`flex w-full items-center justify-center px-6 py-14 text-center sm:px-10 ${className}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url('${creditsBg}')` }}
      />
      <div className="relative flex flex-col items-center gap-3 text-white">
        <p className="font-sans text-[14px] uppercase tracking-[0.2em] sm:text-[16px]">
          Broadcasting Credits
        </p>
        <p className="font-sans text-[24px] font-bold uppercase leading-tight sm:text-[32px] lg:text-[38px]">
          · NBC Sports · ESPN ·
          <br />
          · Feld Entertainment ·
          <br />
          · NEP Broadcasting ·
        </p>
      </div>
    </BlackGrainBackground>
  );
}
