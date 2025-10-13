import Response from "@/lib/api.response";
import { Prisma, User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const data: Prisma.UserCreateInput = {
      name: payload.name,
      email: payload.email,
      password: bcrypt.hashSync(payload.password, 8),
    };

    const user = await prisma.user.create({
      data,
    });

    // menyembunyikan password
    const dataRest: Partial<User> = {
      ...user,
      password: undefined,
    };

    return Response({
      message: "User registered successfully",
      data: dataRest,
    });
  } catch (error) {
    return Response({
      message: "User registration failed",
      data: error,
      status: 500,
    });
  }
}
