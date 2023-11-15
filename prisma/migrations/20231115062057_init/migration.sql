-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('PASSED', 'COMPILATION_ERROR', 'RUNTIME_ERROR', 'WRONG_ANSWER', 'UNKNOWN');

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
    "nParticipatedContests" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contest" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nQuestions" INTEGER NOT NULL DEFAULT 0,
    "nParticipants" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Contest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInContest" (
    "contestantId" TEXT NOT NULL,
    "contestId" INTEGER NOT NULL,
    "nQuestionsSolved" INTEGER NOT NULL DEFAULT 0,
    "questionsSolved" INTEGER[],
    "questionSolvedTime" TIMESTAMP(3)[],
    "score" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserInContest_pkey" PRIMARY KEY ("contestantId","contestId")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "submitterId" TEXT NOT NULL,
    "contestId" INTEGER NOT NULL,
    "isPassed" BOOLEAN NOT NULL DEFAULT false,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'UNKNOWN',
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
CREATE UNIQUE INDEX "UserInContest_contestantId_contestId_key" ON "UserInContest"("contestantId", "contestId");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInContest" ADD CONSTRAINT "UserInContest_contestantId_fkey" FOREIGN KEY ("contestantId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInContest" ADD CONSTRAINT "UserInContest_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_submitterId_contestId_fkey" FOREIGN KEY ("submitterId", "contestId") REFERENCES "UserInContest"("contestantId", "contestId") ON DELETE RESTRICT ON UPDATE CASCADE;
