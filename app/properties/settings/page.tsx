import { auth } from "@/auth"
import Settings from "../../components/Dashboard/Sidebar/Settings"

const page = async () => {

  const session = await auth();

  return (
    <Settings session={session} />
  )
}

export default page