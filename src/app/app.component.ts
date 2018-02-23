import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

	constructor(
		private dataService: DataService,
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
				if( '/' == event.url || '/guide' == event.url ) {
					this.dataService.loading = false;
				}
			}
		});
	}
}
