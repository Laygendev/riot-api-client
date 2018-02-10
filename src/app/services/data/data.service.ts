import { Injectable } from '@angular/core';

import { ChampionModel } from '../../models/champion.model';
import { ItemModel } from '../../models/item.model';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
	public summonerData;
	public spetactorData;
	public champions: Array<ChampionModel> = new Array<ChampionModel>();
	public items: Array<ItemModel> = new Array<ItemModel>();
	public inited: boolean = false;

	constructor(private httpClient: HttpClient) {
	}

	init(): void {
		this.httpClient.get("./assets/json/champions.json").subscribe((data) => {
			for (let key in data) {
				this.champions.push(new ChampionModel(data[key]));
			}

			this.httpClient.get("./assets/json/items.json").subscribe((data) => {
				for (let key in data) {
					this.items.push(new ItemModel(data[key]));
				}

				this.inited = true;

			});

		});
	}

	getChampionById(id: any): ChampionModel {

		for(let key in this.champions) {
			if (this.champions[key].id == id) {
				return this.champions[key]
			}
		}

		return null;
	}

	getItemById(id: any): ItemModel {

		for(let key in this.items) {
			if (this.items[key].id == id) {
				return this.items[key]
			}
		}

		return null;
	}
}
