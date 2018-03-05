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

	private urlAccepted: string[] = ['/', '/guide', '/admin', '/subscribe', '/authentication', '/account' ];
	private urlAdmin: string[] = ['/admin'];

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
				if( this.urlAccepted.indexOf(event.url) != -1 ) {

					if ( this.urlAdmin.indexOf(event.url) != -1 && ( this.dataService.user == undefined || ( this.dataService.user && this.dataService.user.roles.indexOf('administrator') == -1 ) ) ) {
						this.router.navigate(['/']);
					}

					this.dataService.loading = false;
				}
			}
		});
	}

	logout(): void {
		window.localStorage.removeItem('user');
		this.dataService.user = undefined;
	}
}
