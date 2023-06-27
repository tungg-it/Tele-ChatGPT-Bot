import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { OpenaiChatModule } from '../openai-chat/openai-chat.module';
import { TeleService } from './tele.service';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const tele = configService.get('telegram');
        return { token: tele.token };
      },
    }),
    OpenaiChatModule,
  ],
  providers: [TeleService],
})
export class TeleModule {}
