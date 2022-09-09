import { Users } from 'src/users/entities/users.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum NotifTypes {
  Like,
  Comment,
  FriendRequest,
}

@Entity()
export class Notifications {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Users)
  actionUsername: string;

  @ManyToMany(() => Users)
  receiverUsername: string;

  @Column()
  typeOfNotif: NotifTypes;

  @Column()
  description: string;

  @Column()
  notificationMessage: string;
}
