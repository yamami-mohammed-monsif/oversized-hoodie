'use client'
import { useState } from 'react'
import { config } from '@/config/site.config'

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-6">

      {/* Product name + description */}
      <div>
        <p
          className="font-cairo text-xs tracking-widest uppercase opacity-50 mb-1"
          style={{ color: 'var(--color-primary)' }}
        >
          {config.productName}
        </p>
        <h2 className="font-bebas text-4xl tracking-widest mb-3">{config.productNameAr}</h2>
        <p className="font-cairo text-sm leading-relaxed opacity-70">{config.productDescription}</p>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="font-bebas text-4xl tracking-wide" style={{ color: 'var(--color-primary)' }}>
          {config.price}
        </span>
        {config.originalPrice && (
          <span className="font-cairo text-base line-through opacity-40">{config.originalPrice}</span>
        )}
      </div>

      {/* Size selector */}
      <div>
        <p className="font-cairo text-xs tracking-widest uppercase opacity-50 mb-3">المقاس</p>
        <div className="flex gap-2 flex-wrap">
          {config.sizes.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className="font-cairo text-sm px-4 py-2 rounded-lg border transition-all min-h-[44px] min-w-[44px]"
              style={{
                borderColor: selectedSize === size ? 'var(--color-primary)' : 'var(--color-border)',
                backgroundColor: selectedSize === size ? 'var(--color-primary)' : 'transparent',
                color: selectedSize === size ? '#000' : 'var(--color-text)',
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color selector */}
      <div>
        <p className="font-cairo text-xs tracking-widest uppercase opacity-50 mb-3">اللون</p>
        <div className="flex gap-2 flex-wrap">
          {config.colors.map(color => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className="font-cairo text-sm px-4 py-2 rounded-lg border transition-all min-h-[44px]"
              style={{
                borderColor: selectedColor === color ? 'var(--color-primary)' : 'var(--color-border)',
                backgroundColor: selectedColor === color ? 'rgba(200,241,53,0.1)' : 'transparent',
                color: selectedColor === color ? 'var(--color-primary)' : 'var(--color-text)',
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}
