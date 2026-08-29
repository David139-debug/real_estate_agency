import { auth } from "@/auth";
import { Session } from "next-auth";

export const getSession = async () => {
    const session: Session | null = await auth();

    return session
}