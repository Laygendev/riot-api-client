import { Component } from '@angular/core';

import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent {
	public championId: number;

	constructor(public dataService: DataService) {}

	clickChampion(championId: number): void {
		this.championId = championId;
	}
}
