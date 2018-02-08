import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

	constructor(private dataService: DataService) {
		dataService.init();
	}

	ngOnInit(): void {}
}
