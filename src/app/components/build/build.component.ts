import { Component } from '@angular/core';

import { DataService } from '../../services/data/data.service';
import { ChampionModel } from '../../models/champion.model';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent {
	public champion: ChampionModel;

	constructor(public dataService: DataService) {}

	clickChampion(champion: ChampionModel): void {
		this.champion = champion;
	}
}
