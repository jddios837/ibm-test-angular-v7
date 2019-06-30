import { Component, OnInit } from '@angular/core';

import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ibm-test-front-v7';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getPrimaryKey().subscribe((e) => {
      console.log('Value API ', e);
      
    })
  }
}
