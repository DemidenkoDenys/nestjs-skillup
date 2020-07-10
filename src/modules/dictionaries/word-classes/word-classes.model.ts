import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('word-classes')
export class WordClassesEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    class: string;

    @Column()
    description: string;
}
