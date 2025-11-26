import Response from "@/lib/api.response";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const products = await prisma.product.findMany()

        return Response({
            message : "Success to get product",
            data : products,
            status : 200
        })
    } catch (error: any) {
        return Response({
            message : "Failed to get product",
            data : error,
            status : 500
        })
    }
}