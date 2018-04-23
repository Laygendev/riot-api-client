import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data/data.service';

@Component({
  selector: 'app-page-404',
  templateUrl: './page-404.component.html',
  styleUrls: ['./page-404.component.css']
})
export class Page404Component implements OnInit {

  constructor(public dataService: DataService) {}

  ngOnInit() {
		this.dataService.loading = false;
  }

}
