import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from './../../services/data/data.service';
import { ChampionModel } from './../../models/champion.model';
import { GuideModel } from './../../models/guide.model';
import { ItemModel } from './../../models/item.model';

import { HttpGuideService } from './../../services/httpGuide/http-guide.service';

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

	@Input() guideId: string;
	@Input() championId: number;
	@Input() gameMode: string;
	@Output() changeName: EventEmitter<string> = new EventEmitter<string>();

	constructor(
		public dataService: DataService,
		public httpGuideService: HttpGuideService
	) { }

	ngOnInit() {
		this.getGuide();
	}

	getGuide() {
		this.favoriteChampion = this.dataService.getChampionById(this.championId);
		this.changeName.emit(this.favoriteChampion.name);

		if ( this.guideId ) {
			this.httpGuideService.get({ _id: this.guideId }).subscribe((data) => {
				if ( data ) {

					let tmpGuide: GuideModel = new GuideModel(data);
					this.favoriteGuide = tmpGuide;
					this.getChampionInGuide(this.favoriteGuide);
					this.getItemsInGuide(this.favoriteGuide, 'starterItems');
					this.getItemsInGuide(this.favoriteGuide, 'buildItems');
				}
			});
		}

		if ( this.championId && this.gameMode ) {
			this.httpGuideService.get({ championId: this.championId, gameMode: this.gameMode, favorite: true }).subscribe((data) => {
				if ( data ) {
					let tmpGuide: GuideModel = new GuideModel(data);
					this.favoriteGuide = tmpGuide;
					this.getChampionInGuide(this.favoriteGuide);
					this.getItemsInGuide(this.favoriteGuide, 'starterItems');
					this.getItemsInGuide(this.favoriteGuide, 'buildItems');
				}
			});
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

}
