import { Errors, Property } from "@/lib/types/PropertyCard"
import Type from "../Type"
import { SellIcon, RentIcon } from "../TypeIcons"
import { Dispatch, SetStateAction, useEffect } from "react"

const OfferType = ({ data }: { data: {
  setFormData: Dispatch<SetStateAction<Partial<Property>>>;
  error: Errors;
  formData: Partial<Property>
} }) => {

  const { setFormData, error, formData } = data;

  return (
    <section className="flex flex-col gap-5">
        <article>
          <h3 className="text-black font-bold">Offer type</h3>
          <p className="text-[#767781]">What do you want to do with your property?</p>
          {error.offerType && (
            <span className="text-red-600 font-bold">{error.offerType}</span>
          )}
        </article>
        
        <article className="flex flex-col gap-4">
          <div onClick={() => setFormData(d => ({ ...d, offerType: "Sell" }))}>
            <Type
            formData={formData}
            icon={SellIcon}
            type="Sell"
            desc="This property will be listed for sell."
          />
          </div>
          <div onClick={() => setFormData(d => ({ ...d, offerType: "Rent" }))}>
            <Type 
            icon={RentIcon}
            formData={formData}
            type="Rent"
            desc="This property will be listed for rent."
          />
          </div>
        </article>
      </section>
  )
}

export default OfferType