-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('PASSED', 'COMPILATION_ERROR', 'RUNTIME_ERROR', 'WRONG_ANSWER', 'UNKOWN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "cumulativeScore" INTEGER NOT NULL DEFAULT 0,
    "nParticipatedContests" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Contest" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nQuestions" INTEGER NOT NULL,
    "nParticipants" INTEGER NOT NULL,

    CONSTRAINT "Contest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInContest" (
    "contestantId" TEXT NOT NULL,
    "contestId" INTEGER NOT NULL,
    "nQuestionsSolved" INTEGER NOT NULL,
    "questionsSolved" INTEGER[],
    "questionSolvedTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserInContest_pkey" PRIMARY KEY ("contestantId","contestId")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "submitterId" TEXT NOT NULL,
    "contestId" INTEGER NOT NULL,
    "isPassed" BOOLEAN NOT NULL DEFAULT false,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'UNKOWN',
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_id_key" ON "UserProfile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_discordId_key" ON "UserProfile"("discordId");

-- CreateIndex
CREATE UNIQUE INDEX "UserInContest_contestantId_key" ON "UserInContest"("contestantId");

-- CreateIndex
CREATE UNIQUE INDEX "UserInContest_contestId_key" ON "UserInContest"("contestId");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInContest" ADD CONSTRAINT "UserInContest_contestantId_fkey" FOREIGN KEY ("contestantId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInContest" ADD CONSTRAINT "UserInContest_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_submitterId_fkey" FOREIGN KEY ("submitterId") REFERENCES "UserInContest"("contestantId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
