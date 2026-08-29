"use client"

import Image from "next/image";
import img from "./img/userLogo.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Session } from "next-auth";
import { FormDataType } from "@/lib/types/FormData";
import axios from "axios";
import { useRouter } from "next/navigation";

const schema = yup.object({
    name: yup.string().notRequired(),
    last_name: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    email: yup.string().email("You must enter valid email.").notRequired(),
    password: yup.string().notRequired()
})

const Settings = ({ session }: { session: Session | null }) => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })
    const router = useRouter();

    const onSubmit = async (data: FormDataType) => {
        try {
            for (let key of Object.keys(data) as (keyof FormDataType)[]) {
                if (!data[key]) {
                    delete data[key]
                }
            }
            await axios.put(`/api/editProfile/${session?.user.id}`, data);
            router.push("/properties?created=true");
        } catch (err) {
            console.error(err);
        }
    };

  return (
    <main className="bg-white h-screen p-8 flex flex-col gap-8">
        <section className="flex gap-6 items-center">
            <Image 
            src={img}
            alt="User Add image"
            width={93}
            height={93}
        />
        <article className="flex justify-between w-full">
            <div className="flex gap-1.5 flex-col">
                <strong className="text-black">{session?.user?.name} {session?.user?.last_name}</strong>
                <span className="text-[#808080]">{session?.user?.email}</span>
            </div>

            <button
            onClick={handleSubmit(onSubmit)}
             className="bg-[#4182F9] px-9 py-1 rounded-xl
            font-medium cursor-pointer">
                Edit
            </button>
        </article>
        </section>

        <form className="grid grid-cols-2 gap-6">
            <div>
                <label className="block text-black mb-3">Name</label>
                <input {...register("name")} className="bg-[#f9f9f9] px-4 py-3 placeholder:text-[#a2a2a2]
                text-black w-full rounded-xl" type="text" placeholder="Your name" />
                <span className="font-bold text-sm text-red-500 h-0">{errors.name?.message}</span>
            </div>
            <div>
                <label className="block text-black mb-3">Last Name</label>
                <input {...register("last_name")} className="bg-[#f9f9f9] px-4 py-3 placeholder:text-[#a2a2a2]
                text-black w-full rounded-xl" type="text" placeholder="Your Last Name" />
                <span className="font-bold text-sm text-red-500 h-0">{errors.last_name?.message}</span>
            </div>
            <div>
                <label className="block text-black mb-3">Email</label>
                <input {...register("email")} className="bg-[#f9f9f9] px-4 py-3 placeholder:text-[#a2a2a2]
                text-black w-full rounded-xl" type="email" placeholder="Your Email" />
                <span className="font-bold text-sm text-red-500 h-0">{errors.email?.message}</span>
            </div>
            <div>
                <label className="block text-black mb-3">Phone</label>
                <input {...register("phone")} className="bg-[#f9f9f9] px-4 py-3 placeholder:text-[#a2a2a2]
                text-black w-full rounded-xl" type="tel" placeholder="Your Phone" />
                <span className="font-bold text-sm text-red-500 h-0">{errors.phone?.message}</span>
            </div>
            <div>
                <label className="block text-black mb-3">Password</label>
                <input {...register("password")} className="bg-[#f9f9f9] px-4 py-3 placeholder:text-[#a2a2a2]
                text-black w-full rounded-xl" type="password" placeholder="Your Password" />
                <span className="font-bold text-sm text-red-500 h-0">{errors.password?.message}</span>
            </div>
        </form>
    </main>
  )
}

export default Settings