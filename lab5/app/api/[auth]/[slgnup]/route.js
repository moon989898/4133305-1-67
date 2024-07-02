import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const { email, name, password } = await req.json();
        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        return new Response(
            JSON.stringify({
                msg: "User created successfully!",
                newUser,
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({
                error: err.message || 'Internal Server Error',
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}