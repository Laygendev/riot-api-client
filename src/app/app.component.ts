import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

import { DataService } from './services/data/data.service';
import { StaticDataService } from './services/staticData/static-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

	realms: any;

	constructor(
		private dataService: DataService,
		private staticDataService: StaticDataService,
		private router: Router) {
		this.dataService.loading = true;

		dataService.init();
	}

	ngAfterViewInit(): void {
		this.router.events
		.subscribe((event) => {
			if(event instanceof NavigationStart) {
				this.dataService.loading = true;
			}
			else if (
				event instanceof NavigationEnd ||
				event instanceof NavigationCancel
			) {
				if( '/' == event.url || '/guide' == event.url || '/subscribe' == event.url ) {
					this.dataService.loading = false;
				}
			}
		});
	}
}
