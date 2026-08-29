import { AdditonalInfo, Property } from "@/lib/types/PropertyCard"
import { Dispatch, SetStateAction } from "react"

const SizeInfo = ({ data }: { data: Dispatch<SetStateAction<Partial<Property>>> }) => {
  
    const handleChange = (key: keyof AdditonalInfo, value: number) => {
        data(d => ({ 
            ...d,
            additionalInfo: {
                size: d.additionalInfo?.size ?? 0,
                price: d.additionalInfo?.price ?? 0,
                beds: d.additionalInfo?.beds ?? 0,
                baths: d.additionalInfo?.baths ?? 0,
                [key]: value
            }
         }))
    };

    return (
    <section>
        <div>
            <h3 className="text-black font-bold">Additional info</h3>
            <p className="text-[#767781]">You need to add more informations about your property.</p>
        </div>

        <article className="mt-5 grid grid-cols-2 gap-5">
            <label>
                <p className="text-black font-bold">Size</p>
                <input onChange={(e) => handleChange("size", Number(e.target.value))} type="number" className="outline-none text-black
                border-2 border-[#ebebeb] rounded-lg px-2" />
            </label>
            <label>
                <p className="text-black font-bold">Price</p>
                <input onChange={(e) => handleChange("price", Number(e.target.value))} type="number" className="outline-none text-black
                border-2 border-[#ebebeb] rounded-lg px-2" />
            </label>
            <label>
                <p className="text-black font-bold">Beds</p>
                <input onChange={(e) => handleChange("beds", Number(e.target.value))} type="number" className="outline-none text-black
                border-2 border-[#ebebeb] rounded-lg px-2" />
            </label>
            <label>
                <p className="text-black font-bold">Baths</p>
                <input onChange={(e) => handleChange("baths", Number(e.target.value))} type="number" className="outline-none text-black
                border-2 border-[#ebebeb] rounded-lg px-2" />
            </label>
        </article>
    </section>
  )
}

export default SizeInfo