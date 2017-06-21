import { Component } from '@angular/core';
import {Http} from '@angular/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spaceScreens: Array<any>;
  me: Array<any>;
  community: Array<any>;
  achievement: Array<any>;


  constructor(private http:Http) {
    
/*
Unable to get this working so hardcoded
    this.http.get('./data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);
*/
      this.me = [
      {
        "img": "assets/images/me.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "liked": "0"
      }
      ];
      this.community = [
      {
        "img": "assets/images/community.jpg",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "liked": "0"
      }
      ];
      this.achievement = [
      {
        "img": "assets/images/achievement.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "liked": "0"
      }
      ];
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

  deleteMe(i) {
    this.spaceScreens.splice(i,1);
    console.log(i);
  }
}
