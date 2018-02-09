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
	constructor(private dataService: DataService) { }

	ngOnInit() {}
}
