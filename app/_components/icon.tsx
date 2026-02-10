import { cn } from "@/lib/utils";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 16, className }: Readonly<IconProps>) {
  const sizeRem = size / 16;

  return (
    <span
      className={cn("material-symbols-outlined", className)}
      style={{ fontSize: `${sizeRem}rem` }}
    >
      {name}
    </span>
  );
}
