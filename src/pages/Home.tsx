import { Hero } from '../components/home/Hero'
import { TrustStrip } from '../components/home/TrustStrip'
import { ServicesPreview } from '../components/home/ServicesPreview'
import { FeaturedProjects } from '../components/home/FeaturedProjects'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { Process } from '../components/home/Process'
import { TechStack } from '../components/home/TechStack'
import { HomeCTA } from '../components/home/HomeCTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <HomeCTA />
    </>
  )
}
