import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OpenAIModule } from '@platohq/nestjs-openai';
import { OpenaiChatService } from './openai-chat.service';

@Module({
  imports: [
    OpenAIModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const openAI = configService.get('openAI');

        return { apiKey: openAI.key };
      },
    }),
  ],
  providers: [OpenaiChatService],
  exports: [OpenaiChatService],
})
export class OpenaiChatModule {}
