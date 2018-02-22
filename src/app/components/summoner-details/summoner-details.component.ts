import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HttpSpectatorService } from './../../services/httpSpectator/http-spectator.service';
import { HttpSummonerService } from './../../services/httpSummoner/http-summoner.service';
import { StaticDataService } from './../../services/staticData/static-data.service';
import { DataService } from './../../services/data/data.service';

import { ParticipantModel } from './../../models/participant.model';
import { SpectatorModel } from './../../models/spectator.model';
import { SummonerModel } from './../../models/summoner.model';
import { ChampionModel } from './../../models/champion.model';
import { ItemModel } from './../../models/item.model';

@Component({
  selector: 'app-summoner-details',
  templateUrl: './summoner-details.component.html',
  styleUrls: ['./summoner-details.component.css']
})
export class SummonerDetailsComponent  {
	public champions: Array<ChampionModel> = new Array<ChampionModel>();
	public myChampion: ChampionModel = null;
	public myParticipant: ParticipantModel;
	public summonerName: string;
	public errorMessage: string = '';

	constructor(
		public route: ActivatedRoute,
		public httpClient: HttpClient,
		public dataService: DataService,
		private httpSpectatorService: HttpSpectatorService,
		private httpSummonerService: HttpSummonerService,
		private staticDataService: StaticDataService) {
		if ( ! this.dataService.summonerData ) {
			this.route.params.subscribe(param => {
				this.summonerName = param.id;
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
			if ( data && data.status && data.status.status_code != 200 ) {
				this.errorMessage = data.status.status_code + ' ' + 'This summoner is not in a match for now.';
			} else {
				let tmpPartipantsTeam100: Array<ParticipantModel> = new Array<ParticipantModel>();
				let tmpPartipantsTeam200: Array<ParticipantModel> = new Array<ParticipantModel>();
				for (let key in data.participants) {
					let tmpParticipant = new ParticipantModel(data.participants[key]);
					tmpParticipant.champion = this.dataService.getChampionById(tmpParticipant.championId);

					if ( tmpParticipant.teamId == 100 ) {
						tmpPartipantsTeam100.push(tmpParticipant);
					} else {
						tmpPartipantsTeam200.push(tmpParticipant);
					}

					if ( tmpParticipant.summonerId == this.dataService.summonerData.id) {
						this.myParticipant = tmpParticipant;
						this.myChampion = this.myParticipant.champion;
					}
				}
				this.dataService.spetactorData = new SpectatorModel(data);
				this.dataService.spetactorData.participantsTeam100 = tmpPartipantsTeam100;
				this.dataService.spetactorData.participantsTeam200 = tmpPartipantsTeam200;
			}
		});
	}

	getUrl(): string {
		return "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + this.myChampion.name + "_0.jpg')";
	}
}
