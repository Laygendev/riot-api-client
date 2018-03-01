import { Injectable } from '@angular/core';

import { ChampionModel } from '../../models/champion.model';
import { ItemModel } from '../../models/item.model';
import { UserModel } from '../../models/user.model';

import { HttpClient } from '@angular/common/http';
import { StaticDataService } from './../staticData/static-data.service';

import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class DataService {
	public summonerData;
	public spetactorData;
	public champions: Array<ChampionModel> = new Array<ChampionModel>();
	public user: UserModel;
	public items: Array<ItemModel> = new Array<ItemModel>();
	public inited: boolean = false;
	public loading: boolean = false;
	public waitComponentLoad: boolean = false;
	public realms: any;

	constructor(
		private httpClient: HttpClient,
		private sanitizer: DomSanitizer,
		private staticDataService: StaticDataService) {
	}

	init(): void {

		if ( window.localStorage.getItem("user") ) {
			this.user = new UserModel(JSON.parse(window.localStorage.getItem("user")));
		}
		this.httpClient.get("./assets/json/champions.json").subscribe((data) => {
			for (let key in data) {
				this.champions.push(new ChampionModel(data[key]));
			}

			this.staticDataService.getItems().subscribe((responseObject) => {
				for (let key in responseObject.data) {
					let tmpItem: ItemModel = new ItemModel(responseObject.data[key]);
					tmpItem.safeDescription = this.sanitizer.bypassSecurityTrustHtml( tmpItem.description );
					this.items.push(tmpItem);

				}

				this.staticDataService.getRealms().subscribe((data) => {
					this.realms = data;

					this.inited = true;
				});
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
