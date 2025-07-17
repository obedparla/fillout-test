"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  return (
    <div className="relative" ref={menuRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className="absolute left-0 bottom-full mb-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          {children}
        </div>
      )}
    </div>
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
    "flex items-center px-3 py-2 text-sm cursor-pointer transition-colors";
  const variants = {
    default: "text-gray-700 hover:bg-gray-100",
    destructive: "text-red-600 hover:bg-red-50",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
    </div>
  );
}
