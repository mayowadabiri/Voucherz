// import { Response } from './Auth/auth.service';
import { Injectable } from '@angular/core';
import {Query} from "apollo-angular"
import gql from "graphql-tag"
// import { Title } from '@angular/platform-browser';


export interface User{
  name: string
  username: string
  email: string
}
export interface Response{
  allUsers: User[]
}
@Injectable({
  providedIn: 'root'
})
export class GqlService extends Query<Response>{

  document = gql`
    query AllUsers{
        users{
          name
          string
          username
        }
    }
  `
  // constructor() {
  //   super()
  // }
}
