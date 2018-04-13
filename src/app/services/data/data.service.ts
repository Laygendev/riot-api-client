import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { ChampionModel } from '../../models/champion.model';
import { ItemModel } from '../../models/item.model';
import { UserModel } from '../../models/user.model';
import { GuideModel } from '../../models/guide.model';
import { SummonerSpellModel } from '../../models/summonerSpell.model';

import { HttpClient } from '@angular/common/http';
import { StaticDataService } from './../staticData/static-data.service';

import { DomSanitizer } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

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
	public regions: any;
	public userLang: any = 'en'
	public currentRegion: string = 'euw1';
	public summonerSpells: Array<SummonerSpellModel> = new Array<SummonerSpellModel>();
	public isAdmin: boolean = false;
	private initied = new Subject<any>();

	constructor(
		private httpClient: HttpClient,
		private sanitizer: DomSanitizer,
		private staticDataService: StaticDataService,
		@Inject(PLATFORM_ID) private platformId: Object) {
	}

	init(): void {
		if (isPlatformBrowser(this.platformId)) {
			if ( window.localStorage.getItem("user") ) {
				this.user = new UserModel(JSON.parse(window.localStorage.getItem("user")));

				if ( this.user.roles.indexOf( 'administrator') != -1 ) {
					this.isAdmin = true;
				}
			}
		}

		this.staticDataService.getChampions().subscribe((responseObject) => {
			for (let key in responseObject.data) {
				this.champions.push(new ChampionModel(responseObject.data[key]));
			}

			this.staticDataService.getItems().subscribe((responseObject) => {
				for (let key in responseObject.data) {
					let tmpItem: ItemModel = new ItemModel(responseObject.data[key]);
					tmpItem.safeDescription = this.sanitizer.bypassSecurityTrustHtml( tmpItem.description );
					this.items.push(tmpItem);

				}

				this.staticDataService.getRealms().subscribe((data) => {
					this.realms = data;

					// this.staticDataService.getRegions().subscribe((data) => {
					// 	this.regions = data;
					//
					// 	for (let key in this.regions) {
					// 		if (this.regions[key].langs.indexOf(this.userLang) != -1) {
					// 			this.currentRegion = this.regions[key].slug;
					// 			break;
					// 		}
					// 	}
					//
					// 	if ( ! this.currentRegion ) {
					// 		this.currentRegion = 'euw1';
					// 	}

						this.staticDataService.getSummoners().subscribe((responseObject) => {
							for (let key in responseObject.data) {
								let tmpSummonerSpell: SummonerSpellModel = new SummonerSpellModel(responseObject.data[key]);
								this.summonerSpells.push(tmpSummonerSpell);
							}

							this.inited = true;
							this.setInitied();
						});

					// });
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

	getChampionByName(name: any): ChampionModel {
		for(let key in this.champions) {
			if (this.champions[key].name.toLowerCase() == name.toLowerCase()) {

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

	getItemByMode(gameMode: any): Array<ItemModel> {
		let items: Array<ItemModel> = new Array<ItemModel>();

		for (let key in this.items) {
			if ( this.items[key].modeNameInclusions.indexOf(gameMode) > -1 ) {
				items.push(this.items[key]);
			}
		}

		return items;
	}

	getSummonerSpellById(id: any): SummonerSpellModel {
		for(let key in this.summonerSpells) {
			if (this.summonerSpells[key].id == id) {
				return this.summonerSpells[key]
			}
		}

		return null;
	}

	setInitied() {
		this.initied.next();
	}

	getInitied(): Observable<any> {
		return this.initied.asObservable();
	}
}
