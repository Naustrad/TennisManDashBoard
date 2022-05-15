import { BaseEntity, Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./country.entity";
export enum sex {
    M = 'M',
    F = 'F',
    N = 'N',
    O = 'O'
}
@Entity('player')
export class Player extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" })
    firstname: string

    @Column({ type: "varchar" })
    lastname: string

    @Column({
        type: "varchar"
    })
    shortname: string

    @Column({
        type: "enum",
        enum: sex,
        default: sex.O
    })
    sex: sex

    @Column({
        type: "text"
    })
    picture: string

    @Column({
        type: "int"
    })
    rank: number

    @Column({
        type: "int"
    })
    points: number

    @Column({
        type: "int"
    })
    height: number

    @Column({
        type: "int"
    })
    weight: number

    @Column({
        type: "int"
    })
    age: number

    @Column("simple-array")
    last: number[]

    @ManyToOne(() => Country, country => country.players,{
        cascade:true
    })
    @JoinTable()
    country: Country


    getBMI(){
        let bmi = (this.weight/1000)/Math.pow(this.height/100,2);
        return bmi;
    }
    
}