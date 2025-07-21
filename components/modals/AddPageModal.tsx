"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { PageType } from "@/types";

interface AddPageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (_title: string, _pageType: PageType) => void;
}

const pageTypeOptions = [
  {
    value: PageType.INFO,
    label: "Info",
    description: "Information and introduction pages",
  },
  {
    value: PageType.DETAILS,
    label: "Details",
    description: "Detailed form inputs and data collection",
  },
  {
    value: PageType.OTHER,
    label: "Other",
    description: "Custom content and special pages",
  },
  {
    value: PageType.ENDING,
    label: "Ending",
    description: "Confirmation and completion pages",
  },
];

export default function AddPageModal({
  isOpen,
  onClose,
  onSave,
}: AddPageModalProps) {
  const [title, setTitle] = useState("");
  const [selectedType, setSelectedType] = useState<PageType>(PageType.DETAILS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSave(title.trim(), selectedType);
      setTitle("");
      setSelectedType(PageType.DETAILS);
      onClose();
    }
  };

  const handleClose = () => {
    setTitle("");
    setSelectedType(PageType.DETAILS);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="animate-in fade-in-0 fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content
          className="animate-in fade-in-0 zoom-in-95 fixed top-[50%] left-[50%] z-[100] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-lg"
          data-testid="add-page-modal"
        >
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <Dialog.Title className="text-lg leading-none font-semibold tracking-tight text-gray-900">
              Add new page
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-500">
              Choose a name and page type.
            </Dialog.Description>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="page-name"
                className="text-sm leading-none font-medium text-gray-900"
              >
                Page Name
              </label>
              <input
                id="page-name"
                type="text"
                placeholder="Enter page name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                autoFocus
                data-testid="page-name-input"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm leading-none font-medium text-gray-900">
                Page Type
              </label>
              <div className="grid grid-cols-1 gap-2">
                {pageTypeOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex cursor-pointer items-start space-x-3 rounded-md border p-3 transition-colors ${
                      selectedType === option.value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      value={option.value}
                      checked={selectedType === option.value}
                      onChange={(e) =>
                        setSelectedType(e.target.value as PageType)
                      }
                      className="mt-0.5 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                      data-testid={`page-type-${option.value}`}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        {option.label}
                      </div>
                      <div className="mt-0.5 text-xs text-gray-500">
                        {option.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                >
                  Cancel
                </button>
              </Dialog.Close>
              <button
                type="submit"
                disabled={!title.trim()}
                className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                data-testid="submit-add-page"
              >
                Add Page
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
