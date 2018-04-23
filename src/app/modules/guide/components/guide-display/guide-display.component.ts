import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '@app/services/data/data.service';
import { ChampionModel } from '@app/modules/guide/models/champion.model';
import { GuideModel } from '@app/modules/guide/models/guide.model';
import { ItemModel } from '@app/modules/build/models/item.model';

import { HttpGuideService } from '@app/services/httpGuide/http-guide.service';

@Component({
  selector: 'app-guide-display',
  templateUrl: './guide-display.component.html',
  styleUrls: ['./guide-display.component.css']
})
export class GuideDisplayComponent implements OnInit {
	public favoriteGuide: GuideModel;
	public favoriteChampion: ChampionModel;

	public starterItems: Array<ItemModel> = new Array<ItemModel>(undefined, undefined);
	public buildItems: Array<ItemModel> = new Array<ItemModel>(undefined,undefined,undefined,undefined,undefined,undefined);

	public loaded: boolean = false;

	private _champion;
	private _gameMode;

	@Input()
	set champion(champion: ChampionModel) {
		this._champion = champion;
		this.getGuide();
	}

	get champion(): ChampionModel { return this._champion; }

	@Input()
	set gameMode(gameMode: number) {
		this._gameMode = gameMode;
		this.getGuide();
	}

	get gameMode(): number { return this._gameMode; }

	constructor(
		public dataService: DataService,
		public httpGuideService: HttpGuideService
	) { }

	ngOnInit() {
		this.getGuide();
	}

	getGuide() {
		this.favoriteChampion = this._champion;

		if ( this._champion && this._gameMode ) {
			this.httpGuideService.getFavorite({ championId: this._champion.id, gameMode: this._gameMode }).subscribe((data) => {
				if ( data ) {
					let tmpGuide: GuideModel = new GuideModel(data);
					this.favoriteGuide = tmpGuide;
					this.getItemsInGuide(this.favoriteGuide, 'starterItems');
					this.getItemsInGuide(this.favoriteGuide, 'buildItems');
				} else {
					this.clearItems(this.favoriteGuide);

					this.favoriteGuide = new GuideModel();
				}
			});
		}

		if ( ! this.favoriteGuide ) {
			this.clearItems(this.favoriteGuide);

			this.favoriteGuide = new GuideModel();
		}
	}

	getChampionInGuide(build: GuideModel): void {
		this.favoriteChampion = this.dataService.getChampionById(build.championId);
	}

	getItemsInGuide(build: GuideModel, category: string): void {
		for (let key in build[category + 'SlotId']) {
			this[category][key] = this.dataService.getItemById(build[category + 'SlotId'][key]);
		}
	}

	clearItems(build: GuideModel) {
		if ( build ) {
			for (let key in build['starterItemsSlotId']) {
				this['starterItems'][key] = undefined;
			}

			for (let key in build['buildItemsSlotId']) {
				this['buildItems'][key] = undefined;
			}
		}
	}

}
