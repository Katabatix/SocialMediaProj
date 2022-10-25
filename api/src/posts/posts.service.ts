import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepo: Repository<Post>,
  ) { }

  async create(
    username: string,
    postContent: string
  ) {
    this.postRepo.save({
      username: username,
      postContent: postContent
    });
    return 1;
  }

  async findAll() {
    // return `This action returns all posts`;
    // return await this.postRepo.find();
    // let postsQuery = this.postRepo.createQueryBuilder('post');
    const allPosts = await this.postRepo.query(`SELECT * FROM POST`);
    return allPosts;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
