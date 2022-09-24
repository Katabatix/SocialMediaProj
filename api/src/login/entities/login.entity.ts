import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Login {
  @PrimaryColumn()
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthday: Date;
}
