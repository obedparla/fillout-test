import React from "react";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  isDragging?: boolean;
  children: React.ReactNode;
}

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  ({ isActive, isDragging, type, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative flex h-8 w-max cursor-pointer items-center gap-[6px] rounded-lg border-[0.5px] px-2.5 py-1 text-sm font-medium transition-[border] transition-colors transition-shadow duration-200 focus:outline-none focus-visible:border-[0.5px] focus-visible:border-[#2f72e2] focus-visible:bg-white focus-visible:text-[#1a1a1a] focus-visible:shadow-[0px_0px_0px_1.5px_rgba(47,114,226,0.25),0px_1px_1px_0px_rgba(0,0,0,0.02),0px_1px_3px_0px_rgba(0,0,0,0.04)] ${
          isActive
            ? "border-[#e1e1e1] bg-white text-[#1a1a1a] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.02),0px_1px_3px_0px_rgba(0,0,0,0.04)]"
            : "border-[transparent] bg-[#9DA4B226] text-[#677289] hover:bg-[#9DA4B259]"
        } ${isDragging ? "z-10 opacity-60" : ""}`}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
