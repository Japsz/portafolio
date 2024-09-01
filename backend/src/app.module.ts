import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatController } from './chat/chat.controller';
import { ChatModule } from './chat/chat.module';
import { GithubModule } from './github/github.module';

@Module({
  imports: [/* ChatModule */, GithubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
