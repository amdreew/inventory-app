export interface EnviromentModel {
  production: boolean;
  version: '1',
  security: boolean,
  api: string;
  apiToken: string;
  encriptionConfig: IEncriptionConfig;
}

export interface IEncriptionConfig {
  encriptionKey: string;
  encriptionType: IEncriptionType;
  encrypt: string;
  decrypt: string;
}

export interface IEncriptionType {
  base46: string;
  aes: string;
  des: string;
  rabbit: string;
  rc4: string;
  empty: string;
}
