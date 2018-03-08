import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data/data.service';
import { HttpGuideService } from './../../services/httpGuide/http-guide.service';
import { TitleService } from './../../services/title/title.service';

import { GuideModel } from './../../models/guide.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	public routerActive = 'account';
	public guides: Array<GuideModel> = new Array<GuideModel>();

  constructor(
		public dataService: DataService,
		public httpGuideService: HttpGuideService,
		private titleService: TitleService
	) {
		titleService.setTitle( 'Admin - Lol Hype' );
	}

  ngOnInit() {
		this.httpGuideService.get().subscribe((data) => {
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

	toPublish(guide: GuideModel): void {
		guide.state = 'publish';

		this.httpGuideService.put(guide).subscribe((data) => {
			guide.favorite = data.favorite;
		});
	}

}
