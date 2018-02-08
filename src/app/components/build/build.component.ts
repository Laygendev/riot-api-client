import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

import { ChampionModel } from '../../models/champion.model';


@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {
	public champions: Array<ChampionModel> = new Array<ChampionModel>();
  constructor(private httpClient: HttpClient) { }

	ngOnInit() {
		this.httpClient.get("./assets/json/champions.json").subscribe((data) => {
			for (let key in data) {
				this.champions.push(new ChampionModel(data[key]));
			}
		});
	}

}
