import { TickIcon, CrossIcon } from "../../../../../../public/svgs";

const CardDetails = ({perks}) => {
  return (
    <div className="mt-10">
      <ul className="w-full flex flex-col justify-start items-center gap-4">
        {perks.map((perk) => {
          return (
            <li
              key={perk.id}
              className="w-full flex justify-start items-center gap-3"
            >
              {perk.includedInPlan ? <TickIcon /> : <CrossIcon />}
              <p className="text-base text-nowrap">{perk.perkTitle}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardDetails