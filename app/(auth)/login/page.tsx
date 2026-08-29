import Login from "@/app/components/Dashboard/Login"
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {

  const session = await auth();
  
    if (session) {
      redirect("/properties");
    }

  return (
    <main className="flex items-center justify-center h-screen bg-[#f9f9f9]
    ">
        <Login />
    </main>
  )
}

export default page