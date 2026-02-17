import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
  rounded-default
  inline-flex items-center justify-center
  border text-xs whitespace-nowrap
  tracking-[0.05em] text-white uppercase
  outline-none gap-inner-gap cursor-pointer

  relative overflow-hidden

  before:absolute before:inset-y-0 before:left-0
  before:w-0 before:bg-white/5
  before:transition-all before:duration-400
  hover:before:w-full
  `,
  {
    variants: {
      variant: {
        default: "bg-main-default border-main-light",
        outline: "border-[#4F4E50] bg-transparent",
      },
      size: {
        sm: "h-8.5 px-4",
        md: "h-10 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant = "default",
  size = "md",
  square = false,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    square?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size }),
        square && "aspect-square px-0 whitespace-normal",
        className,
      )}
      data-size={size}
      data-slot="button"
      data-square={square ? "true" : "false"}
      data-variant={variant}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Comp>
  );
}
