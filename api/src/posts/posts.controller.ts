import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Post('create')
  async create(
    @Body() createPostDto: CreatePostDto,
    @Res() response: Response
  ) {
    // return this.postsService.create(createPostDto);
    const ok: number = await this.postsService.create(
      createPostDto.username,
      createPostDto.postContent
    );
    if (ok === 1) {
      response.status(HttpStatus.CREATED).send(`Post Created`);
    } else {
      response.status(HttpStatus.FORBIDDEN).send(`Post creation failed`);
    }
  }

  @Get('getPosts')
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
