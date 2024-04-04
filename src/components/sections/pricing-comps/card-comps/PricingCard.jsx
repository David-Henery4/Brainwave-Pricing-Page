import { CrossIcon, TickIcon, ArrowRightIcon } from "../../../../../public/svgs";
import { CardButton, CardDetails, CardPrice } from "./card-items-comps";

const PricingCard = ({ planTitle, planPrice, perks, isSelected }) => {
  //
  return (
    <div className="bg-plainWhite py-[38px] px-12 flex flex-col justify-start items-start">
      <CardPrice planPrice={planPrice} planTitle={planTitle} />

      <CardDetails perks={perks}/>

      <CardButton isSelected={isSelected}/>
    </div>
  );
};

export default PricingCard;
