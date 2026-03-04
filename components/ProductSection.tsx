import Gallery from '@/components/Gallery'
import ProductDetails from '@/components/ProductDetails'

export default function ProductSection() {
  return (
    <section className="py-16" style={{ borderTop: '1px solid var(--color-border)' }}>
      {/* Section header */}
      <div className="px-4 mb-10 flex items-center gap-4">
        <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
        <h2 className="font-bebas text-3xl tracking-widest">شوف المنتج</h2>
        <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
      </div>

      {/* Side by side on desktop, stacked on mobile */}
      <div className="px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <Gallery />
        <ProductDetails />
      </div>
    </section>
  )
}
