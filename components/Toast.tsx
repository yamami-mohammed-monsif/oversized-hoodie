"use client";
import { useEffect } from "react";

type ToastProps = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
};

export default function Toast({
  message,
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [isVisible, onClose, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div
        className="rounded-lg shadow-lg px-6 py-4 flex items-center gap-3 max-w-md animate-in fade-in slide-in-from-top-4"
        style={{
          background: "var(--color-primary)",
          color: "#000",
        }}
      >
        <span className="text-xl">✓</span>
        <p className="font-cairo text-sm font-semibold">{message}</p>
      </div>
    </div>
  );
}
