import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HttpSpectatorService } from '../../services/httpSpectator/http-spectator.service';
import { HttpSummonerService } from '../../services/httpSummoner/http-summoner.service';
import { HttpBuildService } from '../../services/httpBuild/http-build.service';
import { StaticDataService } from '../../services/staticData/static-data.service';
import { DataService } from '../../services/data/data.service';

import { ParticipantModel } from '../../models/participant.model';
import { SpectatorModel } from '../../models/spectator.model';
import { SummonerModel } from '../../models/summoner.model';
import { ChampionModel } from '../../models/champion.model';
import { BuildModel } from '../../models/build.model';
import { ItemModel } from '../../models/item.model';

@Component({
  selector: 'app-summoner-details',
  templateUrl: './summoner-details.component.html',
  styleUrls: ['./summoner-details.component.css']
})
export class SummonerDetailsComponent  {
	public champions: Array<ChampionModel> = new Array<ChampionModel>();
	public build: BuildModel;
	public myParticipant: ParticipantModel;

	constructor(
		public route: ActivatedRoute,
		public httpClient: HttpClient,
		public dataService: DataService,
		private httpSpectatorService: HttpSpectatorService,
		private httpSummonerService: HttpSummonerService,
		private httpBuildService: HttpBuildService,
		private staticDataService: StaticDataService) {
		if ( ! this.dataService.summonerData ) {
			this.route.params.subscribe(param => {
				this.httpSummonerService.get(param.id).subscribe((data) => {
					let summonerData = new SummonerModel(data);
					this.dataService.summonerData = summonerData;

					this.getSpectator();

				});
			});
		} else {
			this.getSpectator();
		}
	}

	getSpectator() {
		this.httpSpectatorService.get(this.dataService.summonerData.id).subscribe((data) => {
			let tmpPartipants: Array<ParticipantModel> = new Array<ParticipantModel>();
			for (let key in data.participants) {
				let tmpParticipant = new ParticipantModel(data.participants[key]);
				tmpParticipant.champion = this.dataService.getChampionById(tmpParticipant.championId);
				tmpPartipants.push(tmpParticipant);

				if ( tmpParticipant.summonerId == this.dataService.summonerData.id) {
					this.myParticipant = tmpParticipant;

					this.getBuild();
				}
			}

			this.dataService.spetactorData = new SpectatorModel(data);
			this.dataService.spetactorData.participants = tmpPartipants;
		});
	}

	getBuild() {
		this.httpBuildService.get(this.myParticipant.championId).subscribe((data) => {
			this.build = data;

			if ( this.build && this.build.itemsId ) {
				this.build.nitems = new Array<ItemModel>();
				for (let key in this.build.itemsId) {
					this.build.nitems.push(this.dataService.getItemById(this.build.itemsId[key]));
				}
			}
		})
	}
}
