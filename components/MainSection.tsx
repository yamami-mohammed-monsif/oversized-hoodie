import Gallery from '@/components/Gallery'
import ProductDetails from '@/components/ProductDetails'
import OrderForm from '@/components/OrderForm'

export default function MainSection() {
  return (
    <section
      id="main-section"
      className="py-12"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="px-4 md:px-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

        <div className="md:sticky md:top-8">
          <Gallery />
        </div>

        <div className="flex flex-col gap-8">
          <ProductDetails />
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
            <OrderForm />
          </div>
        </div>

      </div>
    </section>
  )
}
