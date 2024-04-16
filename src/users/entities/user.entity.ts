/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { Post } from 'src/posts/entities/post.entity';

export enum Channel {
  LOG = 'log',
  ALERT = 'alert',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'boolean', default: false })
  sendNotification: boolean;

  @Column({
    type: 'enum',
    enum: Channel,
    default: Channel.LOG,
  })
  notificationChannel: Channel;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createDate: Date;

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
