import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { DataService } from './../../../app/services/data/data.service';
import { HttpGuideService } from './../../../app/services/httpGuide/http-guide.service';

import { GuideModel } from './../../../app/models/guide.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
	public routerActive = 'account';
	public guides: Array<GuideModel> = new Array<GuideModel>();

	subscription: Subscription;

  constructor(
		public route: ActivatedRoute,
		public dataService: DataService,
		public httpGuideService: HttpGuideService,
	) {
		this.route.params.subscribe(params => {
			if ( params.routerActive ) {
				this.routerActive = params.routerActive;
			}
		});
	}

  ngOnInit() {
		this.subscription = this.dataService.getInitied().subscribe(() => {
			this.httpGuideService.getByAuthorId(this.dataService.user._id).subscribe((data) => {
				if (data) {
					for ( let key in data ) {
						let tmpGuide: GuideModel = new GuideModel(data[key]);
						this.guides.push(tmpGuide);

						tmpGuide['champion'] = this.dataService.getChampionById(tmpGuide.championId);
					}
				}

				this.dataService.loading = false;
			});
		});
	}
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	switchRouter(router: string) {
		this.routerActive = router;
	}

}
