import { base } from './environment.base';

export const environment = {
  ...base,
  env: 'prod',
  production: true,
  serverApiUrl: 'http://node.help-service.lviv.ua/api',
  serverGraphQLUrl: 'http://node.help-service.lviv.ua/api/graphql',
};
