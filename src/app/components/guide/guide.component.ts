import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../../services/data/data.service';
import { TitleService } from './../../services/title/title.service';
import { HttpGuideService } from './../../services/httpGuide/http-guide.service';

import { ChampionModel } from './../../models/champion.model';
import { GuideModel } from './../../models/guide.model';
import { ItemModel } from './../../models/item.model';
import { UserModel } from './../../models/user.model';

@Component({
  selector: 'app-build',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
	public champion: ChampionModel;

	public gamesMode: String[] = ['ARAM', 'CLASSIC'];
	public gameMode: String;

	public guides: Array<GuideModel> = new Array<GuideModel>();

	public favoriteGuideId: string;

	constructor(
		public route: ActivatedRoute,
		public dataService: DataService,
		public httpGuideService: HttpGuideService,
		private titleService: TitleService,
	) {
		this.titleService.setTitle( 'Create guide - Guides LoL' );

		this.route.params.subscribe(params => {
			if ( params.championId && params.gameMode ) {
				this.gameMode = params.gameMode;

				this.champion = this.dataService.getChampionById(params.championId)

				this.getGuides();

			}
		});
	}

	selectChampion(champion: ChampionModel): void {
		this.champion = champion;

		this.getGuides();
	}

	selectGameMode(gameMode: string): void {
		this.gameMode = gameMode;

		this.getGuides();
	}

	getGuides(): void {
		if ( this.champion.id && this.gameMode ) {
			this.httpGuideService.get({
				championId: this.champion.id,
				gameMode: this.gameMode,
				number: -1,
			}).subscribe((data) => {
				this.guides = new Array<GuideModel>();

				if ( data ) {
					if ( data.length == 0 ) {
						this.favoriteGuideId = 'no';
					} else {

						for (let key in data) {
							let tmpGuide: GuideModel = new GuideModel(data[key]);
							this.guides.push(tmpGuide);

							if (true === tmpGuide.favorite && tmpGuide.version == this.dataService.realms.data.v) {
								this.favoriteGuideId = tmpGuide._id;
							}
						}
					}

					this.dataService.loading = false;
				} else {
					this.favoriteGuideId = 'no';
				}
			});
		}
	}

	vote(guide: GuideModel): void {
		this.httpGuideService.vote(guide._id, this.dataService.user._id).subscribe((data) => {
			this.dataService.user = new UserModel(data.user);
			window.localStorage.setItem("user", JSON.stringify(this.dataService.user));
		});
	}
}
