"use client";

import { ReactNode } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

interface DropdownMenuProps {
  trigger: ReactNode;
  children: ReactNode;
  onOpenChange?: (_open: boolean) => void;
}

export default function DropdownMenu({
  trigger,
  children,
  onOpenChange,
}: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root {...(onOpenChange && { onOpenChange })}>
      <DropdownMenuPrimitive.Trigger asChild>
        <div>{trigger}</div>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="animate-dropdown-up shadow-tab-active z-50 w-[220px] rounded-[8px] border-1 border-[#E1E1E1] bg-white text-[#1A1A1A]"
          side="top"
          sideOffset={15}
        >
          {children}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "destructive";
}

export function DropdownMenuItem({
  children,
  onClick,
  variant = "default",
}: DropdownMenuItemProps) {
  const variants = {
    default: "text-gray-700 hover:bg-gray-100 focus:bg-gray-100",
    destructive:
      "text-[#EF494F] hover:bg-red-50 focus:bg-red-50 rounded-b-[8px]",
  };

  return (
    <DropdownMenuPrimitive.Item
      className={`focus:bg-accent focus:text-accent-foreground flex cursor-pointer items-center px-3 py-[7px] text-sm font-medium transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
}
