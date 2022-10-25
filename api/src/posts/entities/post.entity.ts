import {
    Column,
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    postContent: string;
}
