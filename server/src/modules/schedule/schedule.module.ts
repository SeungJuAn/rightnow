import { Module } from "@nestjs/common";
import { ScheduleController } from "./schedule.controller";
import { scheduleService } from "./schedule.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { schedule } from "./entities/schedule.entity";

@Module({
    imports : [TypeOrmModule.forFeature([schedule])],
    controllers : [ScheduleController],
    providers : [scheduleService]
})

export class ScheduleModule {}