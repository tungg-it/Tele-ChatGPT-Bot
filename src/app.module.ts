import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { TeleModule } from './module/telegram/tele.module';
import { OpenaiChatModule } from './module/openai-chat/openai-chat.module';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TeleModule,
    OpenaiChatModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
