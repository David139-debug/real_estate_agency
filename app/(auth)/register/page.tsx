import Register from "@/app/components/Dashboard/Register"
import { auth } from "@/auth"
import { redirect } from "next/navigation";

const page = async () => {

  const session = await auth();

  if (session) {
    redirect("/properties");
  }

  return (
    <main className="flex items-center justify-center h-screen bg-[#f9f9f9]
    ">
        <Register />
    </main>
  )
}

export default page