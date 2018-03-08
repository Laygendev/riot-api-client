import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../../services/data/data.service';
import { HttpGuideService } from './../../services/httpGuide/http-guide.service';
import { TitleService } from './../../services/title/title.service';

import { GuideModel } from './../../models/guide.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
	public routerActive = 'account';
	public guides: Array<GuideModel> = new Array<GuideModel>();

  constructor(
		public route: ActivatedRoute,
		public dataService: DataService,
		public httpGuideService: HttpGuideService,
		private titleService: TitleService
	) {
		this.titleService.setTitle( 'Account - LoL Hype' );

		this.route.params.subscribe(params => {
			if ( params.routerActive ) {
				this.routerActive = params.routerActive;
				this.dataService.loading = false;
			}
		});
	}

  ngOnInit() {
		this.httpGuideService.getByAuthorId(this.dataService.user._id).subscribe((data) => {
			if (data) {
				for ( let key in data ) {
					let tmpGuide: GuideModel = new GuideModel(data[key]);
					this.guides.push(tmpGuide);

					tmpGuide['champion'] = this.dataService.getChampionById(tmpGuide.championId);
				}
			}
		});
  }

	switchRouter(router: string) {
		this.routerActive = router;
	}

}
