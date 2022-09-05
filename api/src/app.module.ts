import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { NotifsModule } from './notifs/notifs.module';

@Module({
  imports: [LoginModule, UsersModule, PostsModule, NotifsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
