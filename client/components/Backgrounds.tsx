import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { asset } from "@/lib/asset";

type GrainTone = "white" | "black";

const grainAssets: Record<GrainTone, string> = {
  white: asset("/images/backgrounds/Grain_White.png"),
  black: asset("/images/backgrounds/Grain_Black.png"),
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
