import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data/data.service';

import { ChampionModel } from '../../models/champion.model';
import { ItemModel } from '../../models/item.model';


@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {
	onEdit: boolean = false;
	constructor(private dataService: DataService) { }

	ngOnInit() {}

	edit(champion: ChampionModel): void {
		this.onEdit = true;
		console.log(champion);
	}

}
