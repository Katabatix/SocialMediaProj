import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryColumn()
  username: number;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthday: Date;
}

@Entity()
export class Friends {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Users)
  @JoinTable()
  senderUsername: Users;

  @ManyToMany(() => Users)
  @JoinTable()
  receiverUsername: Users;
}
