'use client'

import { ReactNode } from "react";
import { PrimaryButton } from "../UI/buttons";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs fade-in"
      onClick={onClose}
    >
      <div
        className="bg-(--background) p-6 global-border max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <PrimaryButton onClick={() => onClose()} className="absolute -right-6 -top-6"> <X /></PrimaryButton>
        {children}
      </div>
    </div>
  )
}