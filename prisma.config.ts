// import type { PrismaConfig } from "@prisma/config";

// export default {
//   datasources: {
//     db: {
//       url: process.env.DATABASE_URL!, // pindahkan URL ke sini
//     },
//   },
// } satisfies PrismaConfig;
// prisma.config.ts
import { defineConfig } from "@prisma/config";

export default defineConfig({
  // Konfigurasi database
  datasources: {
    db: {
      provider: "mysql", // atau 'postgresql', 'mysql'
      url: process.env.DATABASE_URL!,
    },
  },

  // Generator untuk Prisma Client
  generators: [
    {
      name: "client",
      provider: "prisma-client-js",
      output: "./node_modules/.prisma/client",
    },
  ],

  // Opsional: Format file schema
  schemaPath: "./prisma/schema.prisma",
});
