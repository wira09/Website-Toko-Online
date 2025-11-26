import type { PrismaConfig } from "@prisma/config";

export default {
  datasources: {
    db: {
      url: process.env.DATABASE_URL!, // pindahkan URL ke sini
    },
  },
} satisfies PrismaConfig;
