import { ArrowRightIcon } from "../../../../../../public/svgs";

const CardButton = ({isSelected}) => {
  return (
    <div className="mt-8">
      <button
        className={`text-base px-6 py-4 font-bold rounded-lg flex justify-start items-center gap-11 text-nowrap ${
          isSelected
            ? "bg-primaryBlue text-plainWhite"
            : "text-primaryBlue bg-primaryBlue/10"
        }`}
      >
        Start Free Trial
        <span className="">
          <ArrowRightIcon className="w-6 h-6" />
        </span>
      </button>
      <p className="mt-3 text-textDark/70 text-[15px]">
        No credit card required
      </p>
    </div>
  );
}

export default CardButton