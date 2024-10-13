import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const userId = Number(params.id);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return Response.json(user);
}

export async function DELETE(req, { params }) {
  try {
    const userId = Number(params.id);

    const delUser = await prisma.user.delete({
      where: { id: userId },
    });
    return Response.json(delUser, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const userId = Number(params.id);
    const { email, name } = await req.json();
    const updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email,
        name,
      },
    });
    return Response.json(updateUser, { status: 200 });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
