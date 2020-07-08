import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('russian')
export class RussianEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    word: string;

    @Column()
    letters: number;
}
