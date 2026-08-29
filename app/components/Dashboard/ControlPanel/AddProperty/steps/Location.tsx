import { type Location, Property } from "@/lib/types/PropertyCard"
import { Dispatch, SetStateAction } from "react"

const Location = ({ data }: { data: Dispatch<SetStateAction<Partial<Property>>> }) => {
  
  const handleChange = (key: keyof Location, value: number) => {
    data(d => ({ 
      ...d,
      location: {
        address: d.location?.address ?? "",
        name: d.location?.name ?? "",
        city: d.location?.city ?? "",
        street: d.location?.street ?? "",
        [key]: value
      }
     }))
  };
  
  return (
    <section>
        <article>
          <h3 className="text-black font-bold">Where is your property located?</h3>
          <p className="text-[#767781]">Set a location for your property.</p>
        </article>
        <form className="mt-5 flex flex-col gap-5">
            <article>
                <input onChange={(e) => handleChange("address", Number(e.target.value))} type="text" className="w-full border-2 border-[#ebebeb] px-2 py-1
                text-black" />
            </article>
            <article className="flex flex-col border-2 border-[#ebebeb] rounded-2xl">
                <input type="text"
                onChange={(e) => handleChange("name", Number(e.target.value))}
                className="border-b border-[#ebebeb] px-2 py-1 text-black
                placeholder:text-[#95969d] outline-none"
                placeholder="Name" />
                <input type="text"
                onChange={(e) => handleChange("city", Number(e.target.value))}
                className="border border-[#ebebeb] px-2 py-1 text-black
                placeholder:text-[#95969d] outline-none"
                placeholder="City" />
                <input type="text"
                onChange={(e) => handleChange("street", Number(e.target.value))}
                className="border-t border-[#ebebeb] px-2 py-1 text-black
                placeholder:text-[#95969d] outline-none"
                placeholder="Street" />
            </article>
        </form>
    </section>
  )
}

export default Location