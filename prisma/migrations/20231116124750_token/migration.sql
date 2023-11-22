/*
  Warnings:

  - The primary key for the `Submission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Submission` table. All the data in the column will be lost.
  - Added the required column `token` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_pkey",
DROP COLUMN "id",
ADD COLUMN     "token" TEXT NOT NULL,
ADD CONSTRAINT "Submission_pkey" PRIMARY KEY ("submitterId", "contestId");
