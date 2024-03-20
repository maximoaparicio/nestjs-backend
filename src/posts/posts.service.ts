import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    private usersService: UsersService,
  ) {}

  async createPost(post: CreatePostDto) {
    const userFound = this.usersService.getUser(post.authorId);

    if (!userFound) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const newPost = this.postsRepository.create(post);
    const createdPost = await this.postsRepository.save(newPost);

    return createdPost;
  }

  getPosts() {
    return this.postsRepository.find({
      relations: ['author'],
    });
  }
}
