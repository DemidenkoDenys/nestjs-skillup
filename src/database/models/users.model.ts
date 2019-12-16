import {
  Model,
  Table,
  Unique,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class Users extends Model<Users> {

  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  id: number;

  @Unique
  @Column({ type: DataType.STRING })
  login: string;

  @Column({ type: DataType.STRING })
  firstname: string;

  @Column({ type: DataType.STRING })
  surname: string;

  @Column({ type: DataType.DATE })
  birthdate: Date;

  @Column({ type: DataType.STRING })
  description: string;
}
