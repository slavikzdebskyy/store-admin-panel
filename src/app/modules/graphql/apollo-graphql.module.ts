import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NgModule } from '@angular/core';

import { environment } from '../../../environments/environment';

const serverApiUrl = environment.serverApiUrl;

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: `${serverApiUrl}/graphql`,
        }),
      };
    },
    deps: [HttpLink],
  }],
})
export class ApolloGrraphQLModule {}
