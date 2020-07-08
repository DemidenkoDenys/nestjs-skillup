import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('english')
export class EnglishEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    word: string;

    @Column()
    letters: number;
}
