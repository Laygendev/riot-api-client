import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	subscription: Subscription;

	realms: any;

  public menuIsOpen: any = {
    main: false,
    user: false
  };

	constructor(
		public dataService: DataService,
		private router: Router) {
		this.dataService.loading = true;
    
		dataService.init();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.dataService.setInitied();
      }
    });
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

  openMenu(name): void {
    this.menuIsOpen[name] = true;
  }

  closeMenu(name): void {
    this.menuIsOpen[name] = false;
  }

	logout(): void {
		window.localStorage.removeItem('user');
		this.dataService.user = undefined;
		this.dataService.isAdmin = false;
	}
}
