"use client"

import { Dispatch, SetStateAction, useRef, useState } from "react"
import Image from "next/image"
import { Property } from "@/lib/types/PropertyCard";

const ImageType = ({ data }: { data: Dispatch<SetStateAction<Partial<Property>>> }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && image.length <= 24) {
            const file = e.target.files[0];
            const imgUrl = URL.createObjectURL(file);
            
            setImage(i => [...i,  imgUrl]);
            data(d => ({ ...d, photos: [imgUrl] }));
        } else {
            alert("You can't add more photos.")
        }
    };

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

  return (
    <section className="h-screen flex flex-col gap-5 items-center max-w-160">
        <article className="flex justify-between items-center w-full">
          <div>
            <h3 className="text-black font-bold">Property photos</h3>
            <p className="text-[#767781]">You need 5 photos to start. You can add more later.</p>
          </div>

          <div className="bg-blue-200 text-blue-500 px-4 py-1 rounded-xl">
            {image.length}/24
          </div>
        </article>
        <input 
        type="file"
        ref={inputRef}
        onChange={handleChange}
        accept="image/*" 
        className="hidden" />

        <section className="grid grid-cols-4 gap-5">
                {image.map(img => (
                <div className="w-28 h-28 relative">
                    <Image
                src={img}
                fill
                alt="Choosen Image"
                className="rounded-2xl object-cover"
                />
                </div>
            ))}
            <article
        onClick={handleClick}
        className="border-2 border-dotted cursor-pointer py-3
        border-[#cccccc] rounded-2xl w-30 h-30 flex items-center">
            <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM224 176C250.5 176 272 197.5 272 224C272 250.5 250.5 272 224 272C197.5 272 176 250.5 176 224C176 197.5 197.5 176 224 176zM368 288C376.4 288 384.1 292.4 388.5 299.5L476.5 443.5C481 450.9 481.2 460.2 477 467.8C472.8 475.4 464.7 480 456 480L184 480C175.1 480 166.8 475 162.7 467.1C158.6 459.2 159.2 449.6 164.3 442.3L220.3 362.3C224.8 355.9 232.1 352.1 240 352.1C247.9 352.1 255.2 355.9 259.7 362.3L286.1 400.1L347.5 299.6C351.9 292.5 359.6 288.1 368 288.1z"/>
            </svg>
        </article>
        </section>
    </section>
  )
}

export default ImageType