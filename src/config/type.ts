interface Tele {
  token: string;
}

interface OpenAI {
  key: string;
}

export interface Config {
  env: string;
  port: number;
  host: string;
  telegram: Tele;
  openAI: OpenAI;
}
