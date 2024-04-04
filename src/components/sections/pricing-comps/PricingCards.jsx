import { PricingCard,PricingToggle } from "./card-comps"
import plansData from "@/link-lists-data/plansData"

const PricingCards = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-14">
      <PricingToggle/>

      <div className="w-full">
        <ul className="w-full flex justify-between items-center gap-8">
        {plansData.map((plan) => {
          return (
            <li key={plan.id}>
              <PricingCard {...plan}/>
            </li>
            )
          })}
          </ul>
      </div>

    </div>
  )
}

export default PricingCards