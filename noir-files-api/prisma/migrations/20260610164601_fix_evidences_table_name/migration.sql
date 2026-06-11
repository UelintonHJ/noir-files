/*
  Warnings:

  - You are about to drop the `evidenves` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "evidenves" DROP CONSTRAINT "evidenves_caseId_fkey";

-- DropTable
DROP TABLE "evidenves";

-- CreateTable
CREATE TABLE "evidences" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "evidences_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "evidences" ADD CONSTRAINT "evidences_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;
