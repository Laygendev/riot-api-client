import { Component } from '@angular/core';

import { DataService } from '../../services/data/data.service';
import { ChampionModel } from '../../models/champion.model';
import { BuildModel } from '../../models/build.model';
import { ItemModel } from '../../models/item.model';

import { HttpBuildService } from '../../services/httpBuild/http-build.service';


@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent {
	public champion: ChampionModel;

	public gamesMode: String[] = ['ARAM', 'NORMAL']
	public gameMode: String;

	public builds: Array<BuildModel> = new Array<BuildModel>();
	public favoriteBuild: BuildModel;
	public favoriteChampion: ChampionModel;

	public starterItems: Array<ItemModel> = new Array<ItemModel>(undefined, undefined);
	public buildItems: Array<ItemModel> = new Array<ItemModel>(undefined,undefined,undefined,undefined,undefined,undefined);

	constructor(
		public dataService: DataService,
		public httpBuildService: HttpBuildService
	) {

	}

	selectChampion(champion: ChampionModel): void {
		this.champion = champion;

		this.getBuilds();
	}

	selectGameMode(gameMode: string): void {
		this.gameMode = gameMode;

		this.getBuilds();
	}

	getBuilds(): void {
		this.httpBuildService.get({
			championId: this.champion.id,
			gameMode: this.gameMode,
			number: -1,
		}).subscribe((data) => {
			if ( data ) {
				for (let key in data) {
					let tmpBuild: BuildModel = new BuildModel(data[key]);
					this.builds.push(tmpBuild);
					if (true === tmpBuild.favorite) {
						this.favoriteBuild = tmpBuild;
						this.getChampionInBuild(this.favoriteBuild);
						this.getItemsInBuild(this.favoriteBuild, 'starterItems');
						this.getItemsInBuild(this.favoriteBuild, 'buildItems');
					}
				}
			}
		});
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
