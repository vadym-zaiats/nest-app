import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

export enum Genre {
  POLITIC = 'Politic',
  BUSINESS = 'Business',
  SPORT = 'Sport',
  OTHER = 'Other',
}

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column({
    type: 'enum',
    enum: Genre,
    default: Genre.OTHER,
  })
  genre: Genre;

  @Column({ type: 'boolean', default: true })
  isPrivate: boolean;

  @ManyToOne(() => User, (user) => user.posts)
  author: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createDate: Date;

  constructor(post: Partial<Post>) {
    Object.assign(this, post);
  }
}
