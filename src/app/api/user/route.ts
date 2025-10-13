import Response from "@/lib/api.response";
import { NextResponse } from "next/server";

export async function GET() {
  return Response({
    message: "Get all users",
    data: [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Jane Smith",
      },
    ],
    status: 200,
  });
}

export async function POST() {
  return Response({
    message: "User created successfully",
    data: {
      id: 3,
      name: "Alice Johnson",
    },
  });
}
