import { cn } from "@/lib/utils";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function Container({ className, children }: Readonly<ContainerProps>) {
  return (
    <div className={cn("max-w-grid-medium mx-auto w-full px-6", className)}>
      {children}
    </div>
  );
}
