"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex  h-[100vh] flex-col items-center bg-background text-slate-950 dark:bg-zinc-900",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              pointer-events-none
            absolute
            -inset-[10px]
            z-40
            opacity-50
            blur-[10px]
            invert
            filter
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_20%,var(--indigo-300)_15%,var(--blue-300)_40%,hsl(var(--primary))_80%,var(--blue-400)_60%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [background-image:var(--white-gradient),var(--aurora)]
            [background-position:50%_50%,50%_50%] [background-size:300%,_200%] after:absolute after:inset-0
            after:animate-aurora
            after:mix-blend-difference
            after:content-[""] after:[background-attachment:fixed] after:[background-image:var(--white-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            dark:invert-0 dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};