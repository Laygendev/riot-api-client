import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data/data.service';
import { ChampionModel } from '../../models/champion.model';
import { BuildModel } from '../../models/build.model';
import { ItemModel } from '../../models/item.model';

import { HttpBuildService } from '../../services/httpBuild/http-build.service';

@Component({
  selector: 'app-guide-display',
  templateUrl: './guide-display.component.html',
  styleUrls: ['./guide-display.component.css']
})
export class GuideDisplayComponent implements OnInit {
	public favoriteBuild: BuildModel;
	public favoriteChampion: ChampionModel;

	public starterItems: Array<ItemModel> = new Array<ItemModel>(undefined, undefined);
	public buildItems: Array<ItemModel> = new Array<ItemModel>(undefined,undefined,undefined,undefined,undefined,undefined);

	@Input() buildId: string;
	@Input() championId: number;
	@Input() gameMode: string;

	constructor(
		public dataService: DataService,
		public httpBuildService: HttpBuildService
	) { }

	ngOnInit() {
		this.getBuild();
	}

	getBuild() {
		if ( this.buildId ) {
			this.httpBuildService.get({ _id: this.buildId }).subscribe((data) => {
				if ( data ) {
					let tmpBuild: BuildModel = new BuildModel(data);
					this.favoriteBuild = tmpBuild;
					this.getChampionInBuild(this.favoriteBuild);
					this.getItemsInBuild(this.favoriteBuild, 'starterItems');
					this.getItemsInBuild(this.favoriteBuild, 'buildItems');
				}
			});
		}

		if ( this.championId && this.gameMode ) {
			this.httpBuildService.get({ championId: this.championId, gameMode: this.gameMode, favorite: true }).subscribe((data) => {
				if ( data ) {
					let tmpBuild: BuildModel = new BuildModel(data);
					this.favoriteBuild = tmpBuild;
					this.getChampionInBuild(this.favoriteBuild);
					this.getItemsInBuild(this.favoriteBuild, 'starterItems');
					this.getItemsInBuild(this.favoriteBuild, 'buildItems');
				}
			});
		}

	}

	getChampionInBuild(build: BuildModel): void {
		this.favoriteChampion = this.dataService.getChampionById(build.championId);
	}

	getItemsInBuild(build: BuildModel, category: string): void {
		for (let key in build[category + 'SlotId']) {
			this[category][key] = this.dataService.getItemById(build[category + 'SlotId'][key]);
		}
	}

}
