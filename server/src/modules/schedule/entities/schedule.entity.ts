import { IsString } from "class-validator";
import { Column, Entity, PrimaryColumn, Unique } from "typeorm";

@Entity()
export class schedule{
    @PrimaryColumn()
    id : string;
    @Column()
    name : string;
    @Column()
    country : string;
    @Column()
    region : string;
    @Column()
    manager : string;
    @Column()
    scheduleDate : Date;
    
}