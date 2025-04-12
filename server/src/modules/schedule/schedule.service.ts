import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { schedule } from "./entities/schedule.entity";
import { Repository } from "typeorm";
import { createScheduleDto } from "./dto/create-schedule.dto";

@Injectable()
export class scheduleService{
    constructor(@InjectRepository(schedule) private scheduleRepository: Repository<schedule>){}
    // 스케줄 생성 
    async createSchedule(createSchedule : createScheduleDto){
        const save = this.scheduleRepository.create(createSchedule)
        return this.scheduleRepository.save(save)
    }
}