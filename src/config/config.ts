import { Config } from './type';

export default (): Config => ({
  env: process.env?.NODE_ENV ?? 'development',
  port: Number(process.env?.PORT ?? 3005),
  host: process.env?.HOST ?? '0.0.0.0',
  telegram: {
    token: process.env?.TELE_TOKEN ?? '',
  },
  openAI: {
    key: process.env?.OPENAI_API_KEY ?? '',
  },
});
