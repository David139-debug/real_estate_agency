import React from "react";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { getSession } from "../properties/(auth)/session";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  console.log(session);
  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar session={session} />
      <div className="flex flex-col flex-1">
        <article className="border-b border-[#efefef] bg-white p-5">
          <h2 className="text-black dmSans text-2xl font-medium">
            Control Panel
          </h2>
        </article>
        {children}
      </div>
    </div>
  );
}
