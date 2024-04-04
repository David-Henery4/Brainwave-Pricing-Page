import { PrimaryHeading, BodyText } from "@/components/shared"

const PricingHeader = () => {
  return (
    <div className="text-center">
      <PrimaryHeading>Pricing & Plans</PrimaryHeading>
      <div className="max-w-[600px] mx-auto mt-11">
      <BodyText>
        With lots of unique blocks, you can easily build a page without coding.
        Build your next consultancy website within few minutes.
      </BodyText>
      </div>
    </div>
  );
}

export default PricingHeader