import React from "react";
import { clsx } from "clsx";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  isDragging?: boolean;
  isNewlyAdded?: boolean;
  children: React.ReactNode;
}

const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  ({ isActive, isDragging, isNewlyAdded = false, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "relative m-1 flex h-8 w-max cursor-pointer items-center gap-[6px] rounded-lg border-[0.5px] px-2.5 py-1 text-sm font-medium transition-[border] transition-colors transition-shadow duration-200",
          "focus-visible:shadow-tab-focus focus:outline-none focus-visible:border-[0.5px] focus-visible:border-[#2f72e2] focus-visible:bg-white focus-visible:text-[#1a1a1a]",
          {
            "shadow-tab-active border-[#e1e1e1] bg-white text-[#1a1a1a]":
              isActive,
            "border-[transparent] bg-[#9DA4B226] text-[#677289] hover:bg-[#9DA4B259]":
              !isActive,
            "z-10 opacity-60": isDragging,
            "animate-slide-in": isNewlyAdded,
          },
        )}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

Tab.displayName = "Tab";

export default Tab;
