import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function PUT(req: Request, 
    { params }: { params: { id: string } }
) {
    try {
        const body = await req.json();
        const { id } = await params;
        let newBody = {};

        for (let [key, value] of Object.entries(body)) {
            if (key === "password") {
                const hashPw = await bcrypt.hash(value as string, 10);
                value = hashPw
            }
            if (value) {
                newBody = {
                    ...newBody,
                    [key]: value
                }
            }
        }
        
        const foundUser = await prisma.user.findFirst({
            where: {
                id: Number(id)
            }
        });

        if (!foundUser) {
            return NextResponse.json({ message: "User not found." }, { status: 402 });
        }

        if (body.password) {
            const comparePw = await bcrypt.compare(body.password, foundUser.password)
            
            if (comparePw) {
            return NextResponse.json({ message: "You can't have the same password." }, { status: 401 });
        }
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: Number(id),
            },
            data: newBody
        })

        return NextResponse.json({ updatedUser }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Error occurred." }, { status: 500 })
    }
}