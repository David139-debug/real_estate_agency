import { ExpertCardType } from "@/lib/types/ExpertCard"
import Image from "next/image"

const ExpertCard = ({ img, name, job }: ExpertCardType) => {
  return (
    <article className="flex flex-col gap-5 roboto">
        <Image
            src={img}
            alt="Expert image"
            className="rounded-2xl"
        />
        <div className="flex flex-col gap-2">
            <h5 className="text-xl font-medium text-black">{name}</h5>
            <p className="text-black text-[15px]">{job}</p>
        </div>
    </article>
  )
}

export default ExpertCard