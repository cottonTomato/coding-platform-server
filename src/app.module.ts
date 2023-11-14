import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmissionsModule } from './submissions/submissions.module';
import { AuthModule } from './auth/auth.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { ContestModule } from './contest/contest.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SubmissionsModule, AuthModule, LeaderboardModule, ContestModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
