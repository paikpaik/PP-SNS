import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// export enum Role {
//   USER = 'user',
//   ADMIN = 'admin',
// }

@Entity()
export class UsersModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // @Column({
  //   type: 'enum',
  //   enum: Role,
  //   default: Role.USER,
  // })
  // role: Role;
}
