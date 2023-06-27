import { Injectable } from '@nestjs/common';
import { OpenAIClient } from '@platohq/nestjs-openai';

@Injectable()
export class OpenaiChatService {
  constructor(private openAIClient: OpenAIClient) {}

  async createCompletion(prompt: string) {
    const { data } = await this.openAIClient.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 7,
      temperature: 0,
    });
    return data;
  }
}
