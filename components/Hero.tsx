"use client";
import Image from "next/image";
import { config } from "@/config/site.config";

// const HERO_IMAGE = "./hero.jpg";

export default function Hero() {
  const scrollToMain = () => {
    document
      .getElementById("main-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Hero Image */}
      <Image
        src="/hero.jpg"
        alt={`${config.brandName} — ${config.productNameAr}`}
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
        quality={85}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.75) 45%, rgba(10,10,10,0.1) 80%, transparent 100%)",
        }}
      />

      {/* Top bar — animate-1 */}
      <div className="hero-animate-1 absolute top-0 left-0 right-0 flex justify-between items-center px-6 pt-8 z-20">
        <span
          className="font-bebas text-2xl tracking-widest"
          style={{ color: "var(--color-primary)" }}
        >
          {config.brandName}
        </span>
        <button
          onClick={scrollToMain}
          className="font-cairo text-xs border px-4 py-2 rounded-full transition-all hover:opacity-80"
          style={{
            borderColor: "var(--color-primary)",
            color: "var(--color-primary)",
          }}
        >
          اطلب دروك
        </button>
      </div>

      {/* Hero content */}
      <div className="relative z-20 px-6 pb-12 flex flex-col gap-4">
        {/* Stock badge — animate-2 */}
        {config.stockCount > 0 && (
          <div className="hero-animate-2 flex">
            <span className="font-cairo text-xs bg-red-600 text-white px-3 py-1 rounded-full animate-pulse">
              ⚡ {config.stockCount} قطعة باقية فقط
            </span>
          </div>
        )}

        {/* Product label + tagline — animate-3 */}
        <div className="hero-animate-3">
          <p
            className="font-cairo text-sm mb-1 tracking-widest uppercase opacity-60"
            style={{ color: "var(--color-primary)" }}
          >
            {config.productName}
          </p>
          <h1 className="font-bebas font-mediumo text-5xl md:text-6xl lg:text-[80px] leading-none tracking-wide max-w-2xl">
            {config.tagline}
          </h1>
          <p className="font-cairo text-sm mt-2 opacity-60">
            {config.taglineSecondary}
          </p>
        </div>

        {/* Price — animate-4 */}
        <div className="hero-animate-4 flex items-center gap-3">
          <span
            className="font-bebas text-5xl tracking-wide"
            style={{ color: "var(--color-primary)" }}
          >
            {config.price}
          </span>
          {config.originalPrice && (
            <span className="font-cairo text-lg line-through opacity-40">
              {config.originalPrice}
            </span>
          )}
        </div>

        {/* Feature bullets — animate-5 */}
        <ul className="hero-animate-5 flex flex-col gap-2">
          {[
            { icon: "🧵", text: config.material },
            {
              icon: "🚚",
              text: `توصيل ${config.deliveryTime} — ${config.deliveryPrice}`,
            },
            { icon: "📦", text: "جميع ولايات الجزائر الـ 58" },
            { icon: "↩️", text: "استرجاع خلال 7 أيام" },
          ].map((f) => (
            <li
              key={f.text}
              className="flex items-center gap-2 font-cairo text-sm opacity-75"
            >
              <span>{f.icon}</span>
              <span>{f.text}</span>
            </li>
          ))}
        </ul>

        {/* CTA + delivery note — animate-6 */}
        <div className="hero-animate-6 flex flex-col gap-3 pt-1">
          <div className="flex md:justify-start">
            <button
              onClick={scrollToMain}
              className="w-full md:w-auto md:min-w-[280px] font-cairo font-bold text-lg py-4 px-8 rounded-xl transition-all active:scale-95 hover:opacity-90"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "#000000",
                minHeight: "56px",
              }}
            >
              اطلب دروك
            </button>
          </div>
          <p className="font-cairo text-sm opacity-50">
            {config.deliveryNote} · {config.deliveryPrice}
          </p>
        </div>
      </div>
    </section>
  );
}
