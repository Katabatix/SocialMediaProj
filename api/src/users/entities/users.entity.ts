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
  username: string;

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

  @Column('boolean', { default: false })
  loggedIn = false;
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
