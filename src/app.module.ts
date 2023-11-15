import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SubmissionsModule } from './submissions/submissions.module';
import { AuthModule } from './auth/auth.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { ProblemsModule } from './problems/problems.module';
import { ContestantModule } from './contestant/contestant.module';
import { UserModule } from './user/user.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    SubmissionsModule,
    AuthModule,
    LeaderboardModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProblemsModule,
    ContestantModule,
    UserModule,
    DbModule,
  ],
  exports: [DbModule],
})
export class AppModule {}
