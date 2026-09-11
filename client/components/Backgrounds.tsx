import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

type GrainTone = "white" | "black";

const grainAssets: Record<GrainTone, string> = {
  white: "https://api.builder.io/api/v1/image/assets/TEMP/5c93511cc5454fb0a0d28737aea73017a8f56068?width=956",
  black: "https://api.builder.io/api/v1/image/assets/TEMP/367da0ee53d886d7d2b36f24f36afb588e593696?width=956",
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
        backgroundSize: "38px 38px",
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
