import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';

import { EnglishEntity } from '../english';
import { RussianEntity } from '../russian';

@Entity('eng-rus')
export class EngRusEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => EnglishEntity)
    @JoinColumn({ name: 'eng_id', referencedColumnName: 'id' })
    eng_id: number;

    @ManyToOne(type => RussianEntity)
    @JoinColumn({ name: 'rus_id', referencedColumnName: 'id' })
    rus_id: number;
}
