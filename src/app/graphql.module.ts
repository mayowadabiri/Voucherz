import { HttpHeaders } from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const uri = 'http://localhost:4000/graphql  '; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {

  // const getToken = () => localStorage.getItem("token")

  return {
    link: httpLink.create({uri}),
    // httpOptions:{
    //   headers: new HttpHeaders().set("Authorization", `${getToken()}`),
    // },
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
