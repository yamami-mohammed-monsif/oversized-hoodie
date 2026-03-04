"use client";
import { useState } from "react";
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

  return (
    <div className="flex flex-col gap-3">
      {/* Large active image — aspect-[4/5] keeps height proportional */}
      <div className="aspect-[4/5] w-full rounded-xl overflow-hidden relative">
        <Image
          src={GALLERY_IMAGES[activeIdx].src}
          alt={GALLERY_IMAGES[activeIdx].alt}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
        />
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
