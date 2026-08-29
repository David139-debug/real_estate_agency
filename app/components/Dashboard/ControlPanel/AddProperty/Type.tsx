import { ListType } from "@/lib/types/List"

const Type = ({ icon: Icon, type, desc, formData }: ListType) => {

  return (
    <label className="cursor-pointer">
        <input name="listingType" value={type} type="radio" className="hidden" />
        <section className={`border-2 rounded-2xl p-5 w-179
    hover:bg-gray-50 cursor-pointer
    ${formData.offerType === type ? "border-[#2b7fff]" : "border-[#ebebeb]"}`}>

        <article className="flex gap-4 items-center">
            <div className="p-4 border border-[#ebebeb] rounded-full">
                <Icon />
            </div>
            
            <div>
                <h5 className="text-black font-bold">{type}</h5>
                <p className="text-[#767781]">{desc}</p>
            </div>
        </article>
    </section>
    </label>
  )
}

export default Type