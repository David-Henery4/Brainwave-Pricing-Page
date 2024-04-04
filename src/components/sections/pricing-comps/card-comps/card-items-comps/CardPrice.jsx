

const CardPrice = ({ planTitle, planPrice }) => {
  return (
    <div>
      <p className="text-primaryBlue font-bold text-[13px] uppercase">
        {planTitle}
      </p>
      <div className="flex justify-center items-end gap-2 mt-10">
        <p className="font-bold text-6xl">
          <span className="text-2xl">$</span>
          {planPrice.monthly}
        </p>
        <p>/month</p>
      </div>
      <p className="text-[15px] font-normal text-textDark/70 mt-3">
        Billed Monthly
      </p>
    </div>
  );
};

export default CardPrice;
