import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {

  userName: string;
  constructor() { }

  ngOnInit() {
  }

  // searchUser(user? : string) {
  //   console.log(user);
  // }

}
