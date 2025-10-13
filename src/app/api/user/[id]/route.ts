import Response from "@/lib/api.response";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  return Response({
    message: `Get detail users by id ${id}`,
    data: [
      {
        id,
        name: "John Doe",
      },
    ],
    status: 200,
  });
}
