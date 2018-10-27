
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { SearchService } from '../searches/search.service';
//  import { SearchService } from '../search-form/search.service';
//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponet implements OnInit {
  user: any = [];
  repos: any= [];
  username: string;
  constructor(private searchService:SearchService) {

    }

    findProfile(){
      this.searchService.updateUser(this.username);

      this.searchService.getUser().subscribe(users => {
        console.log(users);
        this.user = users;
      });
      this.searchService.getRepos().subscribe(repos => {
        // console.log(repos);
        this.repos = repos;
      })

    }


  ngOnInit() {

  }
  // searchUser() {
  //   this._searchService.updateUser(this.username);
  //   this._searchService.getUser().subscribe(user => {
  //     this.user = user;
  //   });
  //   // Console.log('It works');
  //   this._searchService.getRepos().subscribe(repos => {
  //     // Console.log(user);
  //     this.repos = repos;
  //   });

  // }
}