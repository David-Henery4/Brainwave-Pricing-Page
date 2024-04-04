import { PricingCard,PricingToggle } from "./card-comps"
import plansData from "@/link-lists-data/plansData"

const PricingCards = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-14">
      <PricingToggle/>

      <div className="w-full">
        <ul>
        {plansData.map((plan) => {
          return (
            <li key={plan.id}>
              <PricingCard/>
            </li>
            )
          })}
          </ul>
      </div>

    </div>
  )
}

export default PricingCards