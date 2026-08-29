import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const found = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        });

        if (found) {
            return NextResponse.json({ found }, { status: 201 });
        }
    } catch (err) {
        return NextResponse.json({ message: "Error occurred" }, { status: 500 });
    }
}