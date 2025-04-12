import { Body, Controller, Post } from "@nestjs/common";
import { scheduleService } from "./schedule.service";
import { createScheduleDto } from "./dto/create-schedule.dto";

@Controller('schedule')
export class ScheduleController{

    constructor(private readonly scheduleService : scheduleService){}

    @Post('create')
    async createSchedule(@Body() createScheduleDto : createScheduleDto){
        return this.scheduleService.createSchedule(createScheduleDto)
    }
    
}