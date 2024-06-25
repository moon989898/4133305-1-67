import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req,{ params }){
    const userId = Number(params.id);

    const User = await prisma.user.findUnique({
        where:{
            id: userId,
        },
    });

    return Response.json(User);
}


export async function DELETE(req,{params}){
    try{
    const userId = Number(params.id)
    const delUser = await prisma.user.delete({
        where: { id: userId },
    });
    return Response.json(delUser,{ status: 200});
  } catch (err){
    return Response.json(err,{ status: 500});
  }
}