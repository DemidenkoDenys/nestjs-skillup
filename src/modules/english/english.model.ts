import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('english')
export class English extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    word: string;

    @Column()
    letters: number;
}
