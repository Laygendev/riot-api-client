import { Component } from '@angular/core';

import { DataService } from './../../services/data/data.service';
import { ChampionModel } from './../../models/champion.model';
import { GuideModel } from './../../models/guide.model';
import { ItemModel } from './../../models/item.model';

import { HttpGuideService } from './../../services/httpGuide/http-guide.service';

@Component({
  selector: 'app-build',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
	public champion: ChampionModel;

	public gamesMode: String[] = ['ARAM', 'CLASSIC']
	public gameMode: String;

	public guides: Array<GuideModel> = new Array<GuideModel>();

	public favoriteGuideId: string;

	constructor(
		public dataService: DataService,
		public httpGuideService: HttpGuideService
	) {}

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
							if (true === tmpGuide.favorite) {
								this.favoriteGuideId = tmpGuide._id;
							}
						}
					}
				} else {
					this.favoriteGuideId = 'no';
				}
			});
		}
	}
}
