import Image from "next/image";
import Link from "next/link";

export default function Logo({
  white = false,
  className = "",
  height = 48,
}: {
  white?: boolean;
  className?: string;
  height?: number;
}) {
  const width = Math.round(height * (1091 / 417));
  return (
    <Link href="/" aria-label="Amethyst Pastry & Cakes home" className={`inline-flex ${className}`}>
      <Image
        src="/images/brand/logo-mark.png"
        alt="Amethyst Pastry & Cakes 紫晶阁"
        width={width}
        height={height}
        priority
        className={white ? "logo-white" : ""}
        style={{ height, width }}
      />
    </Link>
  );
}
