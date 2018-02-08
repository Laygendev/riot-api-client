import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HttpSpectatorService } from '../../services/httpSpectator/http-spectator.service';
import { HttpSummonerService } from '../../services/httpSummoner/http-summoner.service';
import { StaticDataService } from '../../services/staticData/static-data.service';
import { DataService } from '../../services/data/data.service';

import { ParticipantModel } from '../../models/participant.model';
import { SpectatorModel } from '../../models/spectator.model';
import { SummonerModel } from '../../models/summoner.model';
import { ChampionModel } from '../../models/champion.model';

@Component({
  selector: 'app-summoner-details',
  templateUrl: './summoner-details.component.html',
  styleUrls: ['./summoner-details.component.css']
})
export class SummonerDetailsComponent  {
	public champions: Array<ChampionModel> = new Array<ChampionModel>();

	constructor(
		public route: ActivatedRoute,
		public httpClient: HttpClient,
		public dataService: DataService,
		private httpSpectatorService: HttpSpectatorService,
		private httpSummonerService: HttpSummonerService,
		private staticDataService: StaticDataService) {
		if ( ! this.dataService.summonerData ) {
			this.route.params.subscribe(param => {
				this.httpSummonerService.get(param.id).subscribe((data) => {
					let summonerData = new SummonerModel(data);
					this.dataService.summonerData = summonerData;

					this.httpClient.get("./assets/json/champions.json").subscribe((data) => {
						for (let key in data) {
							this.champions.push(new ChampionModel(data[key]));
						}

						this.getSpectator();

					});
				});
			});
		} else {
			this.httpClient.get("./assets/json/champions.json").subscribe((data) => {
				for (let key in data) {
					this.champions.push(new ChampionModel(data[key]));
				}

				this.getSpectator();
			});
		}
	}

	getSpectator() {
		console.log(this.champions);
		this.httpSpectatorService.get(this.dataService.summonerData.id).subscribe((data) => {
			let tmpPartipants: Array<ParticipantModel> = new Array<ParticipantModel>();
			for (let key in data.participants) {
				let tmpParticipant = new ParticipantModel(data.participants[key]);

				this.staticDataService.get('', {
					championId: tmpParticipant.championId
				}).subscribe((championData) => {
					tmpParticipant.champion = championData;
					tmpPartipants.push(tmpParticipant);
				});
			}

			this.dataService.spetactorData = new SpectatorModel(data);
			this.dataService.spetactorData.participants = tmpPartipants;
		});
	}
}
