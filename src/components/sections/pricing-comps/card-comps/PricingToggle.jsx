const PricingToggle = () => {
  return (
    <div className="flex justify-center items-center gap-4">

      <div className=" flex justify-center items-center gap-4">

        <p>Monthly</p>

        <div className="bg-textDark/15 relative w-[72px] h-8 rounded-2xl">
          <div className="absolute left-1 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-plainWhite"></div>
        </div>

        <p>Yearly</p>

      </div>


      <p className="text-[13px] font-bold text-primaryBlue">Save 25%</p>
    </div>
  );
};

export default PricingToggle;
