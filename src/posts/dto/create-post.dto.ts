import { Genre } from '../entities/post.entity';

export class CreatePostDto {
  title: string;
  text: string;
  genre: Genre;
  isPrivate: boolean;
}
