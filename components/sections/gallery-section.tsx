import Image from 'next/image'

const images = [
  'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
]

export default function GallerySection() {
  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={image} className={`overflow-hidden rounded-[2rem] border border-white/10 ${index === 1 ? 'lg:translate-y-10' : ''}`}>
              <Image src={image} alt="Galeria PizzaHub" width={700} height={900} className="h-80 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
