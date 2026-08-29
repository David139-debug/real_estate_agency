"use client"
import { useRouter } from "next/navigation"

const Panel = () => {

  const router = useRouter();

  return (
    <main className="bg-white h-screen">
        <button
            onClick={() => router.push("/properties/panel/addProperty")}
             className="bg-[#4182F9] px-9 py-1 rounded-xl
            font-medium cursor-pointer">
                Add New Property
            </button>
    </main>
  )
}

export default Panel