// app/page.jsx  (or pages/index.jsx)
import HeroSection from '@/components/sections/Herosec'
import ServicesSnapshot from '@/components/sections/ServicesSnapshot'
import ProcessSection from '@/components/sections/Processsec'
import ProjectsPreview from '@/components/sections/Projectreview'
import TestimonialsSection from '@/components/sections/Testimonial'
import CTASection from '@/components/sections/Ctasec'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'InkwebStudioz — Web Design & Development Studio',
  description:
    'We craft fast, beautiful websites and web apps for startups and brands that want to grow online.',
}

export default function HomePage() {
  return (
    <main>
      <Header/>
      <HeroSection />
      <ServicesSnapshot />
      <ProcessSection />
      <ProjectsPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer/>
    </main>
  )
}