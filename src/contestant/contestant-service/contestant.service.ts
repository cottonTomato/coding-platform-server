import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import { UserProfile, Contest } from '@prisma/client';

@Injectable()
export class ContestantService {
  constructor(private readonly db: PrismaService) {}

  addContestant(userId: UserProfile['id'], contestId: Contest['id']) {
    return this.db.userInContest.create({
      data: {
        contestant: {
          connect: {
            id: userId,
          },
        },
        contest: {
          connect: {
            id: contestId,
          },
        },
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeContestant(user: UserProfile, contest: Contest) {}
}
