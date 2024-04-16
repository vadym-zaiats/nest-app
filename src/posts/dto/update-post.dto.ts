import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { Genre } from '../entities/post.entity';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  title: string;
  text: string;
  genre: Genre;
  isPrivate: boolean;
}
