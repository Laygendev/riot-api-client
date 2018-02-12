import { Component } from '@angular/core';

import { DataService } from '../../services/data/data.service';
import { ChampionModel } from '../../models/champion.model';
import { BuildModel } from '../../models/build.model';

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

	constructor(public dataService: DataService) {}

	selectChampion(champion: ChampionModel): void {
		this.champion = champion;
	}

	selectGameMode(gameMode: string): void {
		this.gameMode = gameMode;
	}
}
