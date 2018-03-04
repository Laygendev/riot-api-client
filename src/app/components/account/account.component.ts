import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data/data.service';
import { HttpGuideService } from './../../services/httpGuide/http-guide.service';

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
		public dataService: DataService,
		public httpGuideService: HttpGuideService
	) { }

  ngOnInit() {
		this.httpGuideService.getByAuthorId(this.dataService.user._id).subscribe((data) => {
			if (data) {
				for ( let key in data ) {
					let tmpGuide: GuideModel = new GuideModel(data[key]);
					this.guides.push(tmpGuide);
				}
			}
		});
  }

	switchRouter(router: string) {
		this.routerActive = router;
	}

}
