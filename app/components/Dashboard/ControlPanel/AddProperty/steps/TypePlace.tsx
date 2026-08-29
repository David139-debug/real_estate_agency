import { Errors, Property } from "@/lib/types/PropertyCard"
import { Dispatch, SetStateAction } from "react"

const TypePlace = ({ data }: { data: {
    setFormData: Dispatch<SetStateAction<Partial<Property>>>;
    formData: Partial<Property>;
    error: Errors;
} }) => {

    const { setFormData, error, formData } = data;

  return (
    <section className="flex flex-col gap-2">
        <article>
          <h3 className="text-black font-bold">Type of place</h3>
          <p className="text-[#767781]">Select your property type.</p>
          {error.typePlace && (
            <span className="text-red-600 font-bold">{error.typePlace}</span>
          )}
        </article>

        <form className="grid grid-cols-2 gap-5">
        <div onClick={() => setFormData(d => ({ ...d, typePlace: "Modern Villa" }))}>
            <input id="villa" name="typePlace" type="radio" className="peer hidden" />
            <label htmlFor="villa" className="flex justify-center gap-5 px-2 py-3 hover:bg-gray-50 border-2 border-[#ebebeb]
            rounded-xl w-50.25 cursor-pointer peer-checked:border-[#2b7fff]">
                <span className="text-black font-medium">Modern Villa</span>
            </label>
        </div>
        <div onClick={() => setFormData(d => ({ ...d, typePlace: "Single Family" }))}>
            <input type="radio" name="typePlace" className="peer hidden" id="family"  />
            <label htmlFor="family" className="flex justify-center gap-5 px-2 py-3 hover:bg-gray-50 border-2 border-[#ebebeb]
            rounded-xl w-50.25 cursor-pointer peer-checked:border-[#2b7fff]">
                <span className="text-black font-medium">Single Family</span>
            </label>
        </div>
        <div onClick={() => setFormData(d => ({ ...d, typePlace: "Town House" }))}>
            <input id="house" name="typePlace" type="radio" className="peer hidden"  />
            <label htmlFor="house" className="flex justify-center gap-5 px-2 py-3 hover:bg-gray-50 border-2 border-[#ebebeb]
            rounded-xl w-50.25 cursor-pointer peer-checked:border-[#2b7fff]">
                <span className="text-black font-medium">Town House</span>
            </label>
        </div>
        <div onClick={() => setFormData(d => ({ ...d, typePlace: "Appartment" }))}>
            <input id="appartment" name="typePlace" type="radio" className="peer hidden"  />
            <label htmlFor="appartment" className="flex justify-center gap-5 px-2 py-3 hover:bg-gray-50 border-2 border-[#ebebeb]
            rounded-xl w-50.25 cursor-pointer peer-checked:border-[#2b7fff]">
                <span className="text-black font-medium">Appartment</span>
            </label>
        </div>
        <div onClick={() => setFormData(d => ({ ...d, typePlace: "Office" }))}>
            <input id="office" name="typePlace" type="radio" className="peer hidden"  />
            <label htmlFor="office" className="flex justify-center gap-5 px-2 py-3 hover:bg-gray-50 border-2 border-[#ebebeb]
            rounded-xl w-50.25 cursor-pointer peer-checked:border-[#2b7fff]">
                <span className="text-black font-medium">Office</span>
            </label>
        </div>
    </form>
    </section>
  )
}

export default TypePlace