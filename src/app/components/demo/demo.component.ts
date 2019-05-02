import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/github.service';
import { IGitHubUser } from 'src/app/interfaces/gitHubUser';
import { IGitHubUser2 } from 'src/app/interfaces/gitHubUser2';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  providers: [GitHubService]
})
export class DemoComponent implements OnInit {

  userName: string;
  user: IGitHubUser;
  follower: IGitHubUser2[];
  following: IGitHubUser2[];
  loading: boolean = false;
  loadingFollower: boolean = false;
  loadingFollowing: boolean = false;

  constructor(private _gitHub: GitHubService) { }

  ngOnInit() { }

  searchUserName(username: string): void {
    if (username == undefined) {
      window.alert(`Debes ingresar un usuario.`)
    } else {

      this.loading = true;
      console.log(username);
      this._gitHub.getUserProperties(username).subscribe(
        user => {
          this.user = user;
          this.loading = false;
          this.loadingFollowing = true;
          this.loadingFollower = true;
          this._gitHub.getFollowing(this.user.following_url.replace('{/other_user}', '')).subscribe(
            following => {
              this.following = following;
              this.loadingFollowing = false;
            }
          );
          this._gitHub.getFollowers(this.user.followers_url).subscribe(
            follower => {
              this.follower = follower;
              this.loadingFollower = false;
            }
          );

        },
        error => this.loading = false
      )



    }
  }

}
