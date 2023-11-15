import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { ContestantController } from './contestant.controller';
import { ContestantService } from './contestant-service/contestant.service';

@Module({
  imports: [DbModule],
  controllers: [ContestantController],
  providers: [ContestantService],
})
export class ContestantModule {}
