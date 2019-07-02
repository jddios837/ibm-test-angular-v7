import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";

import { Store } from "store";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ibm-test-front-v7';

  constructor(
    private store: Store,
    private appService: AppService) {}

  ngOnInit() {
    this.appService.getPrimaryKey().subscribe((e: any) => {
      // console.log('Value API ', e);
      this.store.set('payMethods', e.key);
    })
  }
}
