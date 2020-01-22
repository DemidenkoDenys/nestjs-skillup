import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, Timestamp } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    surname: string;

    @Column()
    birthdate: Date;

    @Column()
    login: string;

    // @Column({ nullable: true })
    // logoUrl?: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
