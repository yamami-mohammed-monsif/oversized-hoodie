'use client'
import { useState } from 'react'
import { config, WILAYAS } from '@/config/site.config'

type FormData = {
  name: string
  phone: string
  wilaya: string
  size: string
  color: string
}

const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// Shared button classes — both CTAs always identical size
const BTN_BASE = "w-full flex items-center justify-center gap-2 font-cairo font-bold text-base rounded-xl transition-all active:scale-95 hover:opacity-90"
const BTN_HEIGHT = { minHeight: '54px' }

export default function OrderForm() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', wilaya: '', size: '', color: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'أدخل اسمك'
    if (!form.phone.trim() || !/^0[5-7]\d{8}$/.test(form.phone)) e.phone = 'رقم هاتف غير صحيح'
    if (!form.wilaya) e.wilaya = 'اختر الولاية'
    if (!form.size) e.size = 'اختر المقاس'
    if (!form.color) e.color = 'اختر اللون'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    console.log('Order submitted:', form)
    setSubmitted(true)
  }

  const whatsappLink = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    `مرحبا، باغي نطلب ${config.productNameAr} من ${config.brandName}`
  )}`

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
          style={{ background: 'var(--color-primary)' }}
        >
          ✓
        </div>
        <h3 className="font-bebas text-3xl tracking-widest mb-2">الطلبية وصلت!</h3>
        <p className="font-cairo text-sm opacity-60 leading-relaxed">
          راح نتواصل معك على {form.phone} خلال 24 ساعة.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">

      {/* Form header */}
      <div>
        <h3 className="font-bebas text-2xl tracking-widest mb-1">اطلب دروك</h3>
        <p className="font-cairo text-xs opacity-50">🚚 التوصيل في {config.deliveryTime} لكل الولايات</p>
      </div>

      {/* Stock urgency */}
      {config.stockCount > 0 && (
        <div
          className="flex items-center gap-2 rounded-lg px-4 py-3 border"
          style={{ borderColor: '#E6394633', background: '#E6394611' }}
        >
          <span>⚡</span>
          <p className="font-cairo text-sm text-red-400">تبقاو غير {config.stockCount} قطع — اطلب قبل ما يخلص</p>
        </div>
      )}

      {/* Name */}
      <div>
        <label className="font-cairo text-xs opacity-60 block mb-2">الاسم الكامل *</label>
        <input
          type="text"
          placeholder="مثال: أحمد بن علي"
          value={form.name}
          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
          className="w-full font-cairo text-base px-4 py-3 rounded-xl outline-none"
          style={{
            background: '#1a1a1a',
            border: `1px solid ${errors.name ? '#E63946' : 'var(--color-border)'}`,
            color: 'var(--color-text)',
            minHeight: '52px',
          }}
        />
        {errors.name && <p className="font-cairo text-xs text-red-400 mt-1">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="font-cairo text-xs opacity-60 block mb-2">رقم الهاتف *</label>
        <input
          type="tel"
          placeholder="05XXXXXXXX"
          value={form.phone}
          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
          className="w-full font-cairo text-base px-4 py-3 rounded-xl outline-none"
          dir="ltr"
          style={{
            background: '#1a1a1a',
            border: `1px solid ${errors.phone ? '#E63946' : 'var(--color-border)'}`,
            color: 'var(--color-text)',
            minHeight: '52px',
          }}
        />
        {errors.phone && <p className="font-cairo text-xs text-red-400 mt-1">{errors.phone}</p>}
      </div>

      {/* Wilaya */}
      <div>
        <label className="font-cairo text-xs opacity-60 block mb-2">الولاية *</label>
        <select
          value={form.wilaya}
          onChange={e => setForm(p => ({ ...p, wilaya: e.target.value }))}
          className="w-full font-cairo text-base px-4 py-3 rounded-xl outline-none appearance-none cursor-pointer"
          style={{
            background: '#1a1a1a',
            border: `1px solid ${errors.wilaya ? '#E63946' : 'var(--color-border)'}`,
            color: form.wilaya ? 'var(--color-text)' : '#666',
            minHeight: '52px',
          }}
        >
          <option value="" disabled>اختر ولايتك</option>
          {WILAYAS.map(w => <option key={w} value={w}>{w}</option>)}
        </select>
        {errors.wilaya && <p className="font-cairo text-xs text-red-400 mt-1">{errors.wilaya}</p>}
      </div>

      {/* Size */}
      <div>
        <label className="font-cairo text-xs opacity-60 block mb-2">المقاس *</label>
        <div className="flex gap-2 flex-wrap">
          {config.sizes.map(s => (
            <button
              key={s}
              onClick={() => setForm(p => ({ ...p, size: s }))}
              className="font-cairo text-sm px-5 py-3 rounded-xl border transition-all"
              style={{
                borderColor: form.size === s ? 'var(--color-primary)' : errors.size ? '#E63946' : 'var(--color-border)',
                backgroundColor: form.size === s ? 'var(--color-primary)' : 'transparent',
                color: form.size === s ? '#000' : 'var(--color-text)',
                minHeight: '48px',
              }}
            >
              {s}
            </button>
          ))}
        </div>
        {errors.size && <p className="font-cairo text-xs text-red-400 mt-1">{errors.size}</p>}
      </div>

      {/* Color */}
      <div>
        <label className="font-cairo text-xs opacity-60 block mb-2">اللون *</label>
        <div className="flex gap-2 flex-wrap">
          {config.colors.map(c => (
            <button
              key={c}
              onClick={() => setForm(p => ({ ...p, color: c }))}
              className="font-cairo text-sm px-4 py-3 rounded-xl border transition-all"
              style={{
                borderColor: form.color === c ? 'var(--color-primary)' : errors.color ? '#E63946' : 'var(--color-border)',
                backgroundColor: form.color === c ? 'rgba(200,241,53,0.1)' : 'transparent',
                color: form.color === c ? 'var(--color-primary)' : 'var(--color-text)',
                minHeight: '48px',
              }}
            >
              {c}
            </button>
          ))}
        </div>
        {errors.color && <p className="font-cairo text-xs text-red-400 mt-1">{errors.color}</p>}
      </div>

      {/* CTAs — both identical w-full size */}
      <div className="flex flex-col gap-3 pt-2">
        <button
          onClick={handleSubmit}
          className={BTN_BASE}
          style={{ backgroundColor: 'var(--color-primary)', color: '#000', ...BTN_HEIGHT }}
        >
          تأكيد الطلبية
        </button>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={BTN_BASE}
          style={{ border: '1px solid #25D366', color: '#25D366', ...BTN_HEIGHT }}
        >
          {WA_ICON}
          اطلب على واتساب
        </a>
      </div>

      <p className="font-cairo text-xs text-center opacity-30">
        معلوماتك محمية · لا يتم الدفع إلا عند الاستلام
      </p>
    </div>
  )
}
