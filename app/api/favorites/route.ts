import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = req.json();

        return NextResponse.json({ message: "Property added" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error occurred." }, { status: 500 })
    }
}