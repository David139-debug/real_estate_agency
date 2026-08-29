import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt  from "bcrypt";

export async function POST(req: Request) {
    try {
    const body = await req.json();

    const foundUser = await prisma.user.findUnique({
        where: { email: body.email }
    });

    if (foundUser) {
        return NextResponse.json(
            { message: "Email already exist." }, 
            { status: 401 });
    }

    const hashedPw = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            last_name: body.last_name,
            email: body.email,
            phone: body.phone,
            password: hashedPw,
            role: "USER"
        }
    });

    return NextResponse.json({ newUser }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error occurred" }, { status: 500 });
    }
}