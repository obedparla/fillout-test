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
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-48 rounded-md border border-gray-200 bg-white p-1 shadow-lg"
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
  const baseStyles =
    "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";
  const variants = {
    default: "text-gray-700 hover:bg-gray-100",
    destructive:
      "text-red-600 hover:bg-red-50 focus:bg-red-50 focus:text-red-600",
  };

  return (
    <DropdownMenuPrimitive.Item
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
}
