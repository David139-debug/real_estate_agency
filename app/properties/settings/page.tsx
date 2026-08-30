import { auth } from "@/auth";
import Settings from "../../components/Dashboard/Sidebar/Settings";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <Settings session={session} />;
};

export default page;
