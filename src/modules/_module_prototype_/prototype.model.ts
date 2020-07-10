import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('___')
export class ...Entity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    key: string;
}
