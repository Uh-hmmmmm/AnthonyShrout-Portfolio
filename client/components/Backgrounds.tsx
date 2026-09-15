import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

type GrainTone = "white" | "black";

const grainAssets: Record<GrainTone, string> = {
  white: "/images/backgrounds/Grain_White.png",
  black: "/images/backgrounds/Grain_Black.jpg",
};

export function GrainBackground({
  tone,
  children,
  className = "",
  style,
  ...rest
}: {
  tone: GrainTone;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
} & HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={`relative overflow-hidden bg-center bg-repeat ${tone === "black" ? "bg-black text-white" : "bg-white text-[#121212]"} ${className}`}
      {...rest}
      style={{
        backgroundImage: `url('${grainAssets[tone]}')`,
        backgroundSize: tone === "white" ? "720px 720px" : "720px 720px",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

export function WhiteGrainBackground(props: Omit<Parameters<typeof GrainBackground>[0], "tone">) {
  return <GrainBackground {...props} tone="white" />;
}

export function BlackGrainBackground(props: Omit<Parameters<typeof GrainBackground>[0], "tone">) {
  return <GrainBackground {...props} tone="black" />;
}
