import {EnviromentModel} from './enviroment.model';

export const environment: EnviromentModel = {
  production: true,
  version: '1',
  security: true,
  api: '',
  apiToken: '',
  encriptionConfig: {
    encriptionKey: '9zgxN}Ca!:,#>tE#3{![KDV{r0uw+Fh',
    encriptionType: {
     base46: 'base64',
     aes: 'aes',
     des: 'des',
     rabbit: 'rabbit',
     rc4: 'rc4',
     empty: ''
   },
   encrypt: 'encrypt',
   decrypt: 'decrypt'
  }
}


