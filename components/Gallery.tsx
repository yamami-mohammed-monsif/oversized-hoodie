"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { config } from "@/config/site.config";

// Real Unsplash photos — free to use under Unsplash License
const GALLERY_IMAGES = [
  {
    src: "/image1.webp",
    alt: "هودي أوفرسايز — المنظر الأمامي",
  },
  {
    src: "/image2.webp",
    alt: "هودي أوفرسايز — تفصيل الخامة",
  },
  {
    src: "/image3.webp",
    alt: "هودي أوفرسايز — كلوز أب",
  },
  {
    src: "/image4.webp",
    alt: "هودي أوفرسايز — ستايل الشارع",
  },
  {
    src: "/image5.webp",
    alt: "هودي أوفرسايز — لايفستايل",
  },
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handlePrevImage = () => {
    setActiveIdx((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveIdx((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const difference = touchStartX.current - touchEndX.current;
    const isLeftSwipe = difference > 30; // Swipe threshold
    const isRightSwipe = difference < -30;

    if (isLeftSwipe) {
      handlePrevImage();
    } else if (isRightSwipe) {
      handleNextImage();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {/* Large active image — aspect-[4/5] keeps height proportional */}
      <div
        ref={galleryRef}
        className="aspect-[4/5] w-full rounded-xl overflow-hidden relative cursor-grab active:cursor-grabbing group"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={GALLERY_IMAGES[activeIdx].src}
          alt={GALLERY_IMAGES[activeIdx].alt}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
        />

        {/* Navigation arrows */}
        <button
          onClick={handlePrevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Thumbnail row */}
      <div className="grid grid-cols-5 gap-2">
        {GALLERY_IMAGES.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className="aspect-square rounded-lg overflow-hidden border-2 transition-all relative"
            style={{
              borderColor:
                activeIdx === i ? "var(--color-primary)" : "transparent",
              opacity: activeIdx === i ? 1 : 0.5,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="80px"
              quality={60}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
