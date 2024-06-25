import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const allUsers = await prisma.user.findMany();

  return Response.json(allUsers);
}


export async function POST(req){
    try{    
    const {email,name} = await req.json()
    
    const createUser = await prisma.user.create({
        data:{
            email,
            name,
        },
    });
    return Response.json(createUser,{ status: 200});
    }catch (err){
    return Response.json(err,{ status: 500});
  }
}