import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
    private readonly entitiyManager: EntityManager,
  ) {}
  async create(createPostDto: CreatePostDto) {
    const post = new Post(createPostDto);
    await this.entitiyManager.save(post);
    return post;
  }

  async findAll() {
    return await this.postsRepository.find();
  }

  async findOne(id: number) {
    return await this.postsRepository.findOneBy({ id });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postsRepository.findOneBy({ id });
    post.title = updatePostDto.title;
    post.text = updatePostDto.text;
    post.genre = updatePostDto.genre;
    post.isPrivate = updatePostDto.isPrivate;
    await this.entitiyManager.save(post);
    return post;
  }

  async remove(id: number) {
    await this.postsRepository.delete(id);
  }
}
