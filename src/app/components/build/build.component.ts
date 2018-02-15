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

	public favoriteBuildId: string;

	constructor(
		public dataService: DataService,
		public httpBuildService: HttpBuildService
	) {}

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
						this.favoriteBuildId = tmpBuild._id;
					}
				}
			}
		});
	}
}
