import { PricingHeader, PricingCards } from "./pricing-comps"

const PricingSection = () => {
  return (
    <section className="pt-24 pb-28 flex flex-col justify-center items-center gap-14 max-w-maxSectionWidth mx-auto">
      <PricingHeader/>
      <PricingCards/>
    </section>
  )
}

export default PricingSection