import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SubmissionsModule } from './submissions/submissions.module';
import { AuthModule } from './auth/auth.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { ProblemsModule } from './problems/problems.module';
import { PrismaService } from './prisma-service/prisma.service';

@Module({
  imports: [
    SubmissionsModule,
    AuthModule,
    LeaderboardModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProblemsModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
