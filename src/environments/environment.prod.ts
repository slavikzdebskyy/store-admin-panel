import { base } from './environment.base';

export const environment = {
  ...base,
  env: 'prod',
  production: true,
  serverApiUrl: 'http://api.help-service.lviv.ua/api',
  serverGraphQLUrl: 'http://api.help-service.lviv.ua/api/graphql',
};
