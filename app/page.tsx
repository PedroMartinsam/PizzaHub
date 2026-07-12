import HeroSection from '@/components/sections/hero-section'
import PromoSection from '@/components/sections/promo-section'
import CategoriesSection from '@/components/sections/categories-section'
import PopularSection from '@/components/sections/popular-section'
import BenefitsSection from '@/components/sections/benefits-section'
import ReviewsSection from '@/components/sections/reviews-section'
import GallerySection from '@/components/sections/gallery-section'
import HowItWorksSection from '@/components/sections/how-it-works-section'
import ContactSection from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PromoSection />
      <CategoriesSection />
      <PopularSection />
      <BenefitsSection />
      <ReviewsSection />
      <GallerySection />
      <HowItWorksSection />
      <ContactSection />
    </main>
  )
}
