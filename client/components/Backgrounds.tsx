import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

type GrainTone = "white" | "black";

const grainAssets: Record<GrainTone, string> = {
  white: "https://cdn.builder.io/api/v1/image/assets%2F0fed82f307b44ac3aa54a5572c541467%2F6709b3f4a0e2402d9a163301f3e68261?format=webp&width=800&height=1200",
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
        backgroundSize: tone === "white" ? "720px 720px" : "38px 38px",
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
