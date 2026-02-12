import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "font-sub-heading text-title-100 flex items-center justify-center rounded-[0.1875rem] border px-2 text-xs leading-none font-bold tracking-[0.05em] whitespace-nowrap uppercase h-6",
  {
    variants: {
      variant: {
        green: "bg-[#07420F] border-[#096815]",
        gray: "bg-[#1D1C1E] border-[#4A494B]",
      },
    },
    defaultVariants: {
      variant: "green",
    },
  },
);

export function Tag({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof tagVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(tagVariants({ variant }), className)}
      data-slot="badge"
      data-variant={variant}
      {...props}
    />
  );
}
