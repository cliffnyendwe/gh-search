import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from '../user';
import {Repos} from '../repo';
import {environment} from '../../environments/environment';

import { Http, Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private username: string;

  constructor(private http:Http) {
    console.log('Search Service Ready...');
    this.username =  'cliffnyendwe';

  }
  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username +
     '?client_id=' + environment.accessToken   + '&client_secret=' + environment.apiUrl)
    .pipe(map(res => res.json()));
  }
  getRepos() {
    return this.http.get(' https://api.github.com/users/' + this.username + '/repos?access_token=' + environment.apiUrl)
    .pipe(map(res => res.json()));
}
updateUser(username: string) {
  this.username = username;
}
}