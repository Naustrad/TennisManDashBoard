import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Player } from "./player.entity";

@Entity('country')
export class Country extends BaseEntity{
    


    @Column({
        type : "text"
    })
    picture : string

    @PrimaryColumn({
        type : "varchar",
        length: 3,
        unique: true
    })
    code : string

    @OneToMany(()=>Player,player => player.country)
    players : Player[]
}