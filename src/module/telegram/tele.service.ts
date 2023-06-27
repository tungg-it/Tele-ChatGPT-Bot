import { Injectable, Logger } from '@nestjs/common';
import { On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { OpenaiChatService } from '../openai-chat/openai-chat.service';

@Update()
@Injectable()
export class TeleService {
  private logger = new Logger(TeleService.name);
  constructor(private openaiChatService: OpenaiChatService) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Welcome to ChatGPT BOT 📣📣');
  }

  @On('text')
  async onText(ctx: any) {
    try {
      const message: string = ctx.message?.text;
      const data = await this.openaiChatService.createCompletion(message);
      console.log(data);
      await ctx.reply(message);
    } catch (error) {
      await ctx.reply('Đang có lỗi sảy ra!!');
      await ctx.reply(
        'Đội ngũ của chúng tôi đang cố gắng khắc phục lỗi sớm nhất. Vui lòng chờ trong quá trình chúng tôi xử lí sự cố!',
      );
      this.logger.debug(error);
    }
  }
}
