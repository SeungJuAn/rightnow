import { IsDate, IsString } from "class-validator";
// 스케줄 생성 DTO
export class createScheduleDto{
    @IsString()
    id : string;
    name : string;
    manager : string;
    country : string;
    region : string;

    @IsDate()
    scheduleDate : Date;
}