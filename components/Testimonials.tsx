'use client'
import { config } from '@/config/site.config'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className="text-sm" style={{ color: i <= count ? 'var(--color-primary)' : '#333' }}>★</span>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: typeof config.testimonials[number] }) {
  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-3 h-full"
      style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-cairo font-bold text-sm">{t.name}</p>
          <p className="font-cairo text-xs opacity-50">{t.wilaya}</p>
        </div>
        <Stars count={t.rating} />
      </div>
      <p className="font-cairo text-sm leading-relaxed opacity-80 flex-1">"{t.text}"</p>
      <div className="flex items-center gap-1">
        <span style={{ color: 'var(--color-primary)' }}>✓</span>
        <span className="font-cairo text-xs opacity-40">طلبية مؤكدة</span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const scrollToMain = () => {
    document.getElementById('main-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16" style={{ borderTop: '1px solid var(--color-border)' }}>

      <div className="px-4 mb-6 flex items-center gap-4">
        <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
        <h2 className="font-bebas text-3xl tracking-widest">شنو قالو عملاؤنا</h2>
        <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
      </div>

      <div className="flex flex-col items-center gap-2 mb-10 px-4">
        <span className="font-bebas text-6xl" style={{ color: 'var(--color-primary)' }}>4.9</span>
        <Stars count={5} />
        <p className="font-cairo text-xs opacity-50">بناءً على +200 طلبية</p>
      </div>

      {/* Mobile slider */}
      <div className="md:hidden px-4">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {config.testimonials.map((t, i) => (
            <div key={i} className="snap-center shrink-0 w-[85vw] max-w-sm">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-3">
          {config.testimonials.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full"
              style={{ background: i === 0 ? 'var(--color-primary)' : 'var(--color-border)' }} />
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto">
        {config.testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>

      <div className="flex justify-center mt-10 px-4">
        <button
          onClick={scrollToMain}
          className="w-full md:w-auto md:min-w-[280px] font-cairo font-bold text-lg py-4 px-8 rounded-xl transition-all active:scale-95 hover:opacity-90"
          style={{ backgroundColor: 'var(--color-primary)', color: '#000000', minHeight: '56px' }}
        >
          اطلب دروك
        </button>
      </div>
    </section>
  )
}
