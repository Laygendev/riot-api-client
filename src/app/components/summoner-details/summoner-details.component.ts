import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HttpSpectatorService } from './../../services/httpSpectator/http-spectator.service';
import { HttpSummonerService } from './../../services/httpSummoner/http-summoner.service';
import { StaticDataService } from './../../services/staticData/static-data.service';
import { DataService } from './../../services/data/data.service';
import { TitleService } from './../../services/title/title.service';

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
	public currentRegion: string;
	public errorMessage: string = '';

	constructor(
		public route: ActivatedRoute,
		public httpClient: HttpClient,
		public dataService: DataService,
		private httpSpectatorService: HttpSpectatorService,
		private httpSummonerService: HttpSummonerService,
		private staticDataService: StaticDataService,
		private titleService: TitleService) {
		this.titleService.setTitle( 'Current Game - LoL Hype' );
		if ( ! this.dataService.summonerData ) {
			this.route.params.subscribe(param => {
				this.summonerName = param.id;
				this.titleService.setTitle( this.summonerName + ' Current Game - LoL Hype' );
				this.currentRegion = param.region;
				this.httpSummonerService.get(param.id, param.region).subscribe((data) => {
					let summonerData = new SummonerModel(data);
					this.dataService.summonerData = summonerData;

					this.getSpectator();

				});
			});
		} else {
			this.route.params.subscribe(param => {
				this.summonerName = param.id;
				this.currentRegion = param.region;
				this.getSpectator();
			});
		}
	}

	getSpectator() {
		this.httpSpectatorService.get(this.dataService.summonerData.id, this.currentRegion).subscribe((data) => {
			if ( data && data.status && data.status.status_code != 200 ) {
				this.errorMessage = data.status.status_code + ' ' + 'This summoner is not in a match for now.';
				this.dataService.loading = false;
			} else {
				let tmpPartipantsTeam100: Array<ParticipantModel> = new Array<ParticipantModel>();
				let tmpPartipantsTeam200: Array<ParticipantModel> = new Array<ParticipantModel>();
				for (let key in data.participants) {
					let tmpParticipant = new ParticipantModel(data.participants[key]);
					tmpParticipant.champion = this.dataService.getChampionById(tmpParticipant.championId);

					tmpParticipant['spells'] = {
						'one': this.dataService.getSummonerSpellById(tmpParticipant.spell1Id),
						'two': this.dataService.getSummonerSpellById(tmpParticipant.spell2Id),
					};

					if ( tmpParticipant.teamId == 100 ) {
						tmpPartipantsTeam100.push(tmpParticipant);
					} else {
						tmpPartipantsTeam200.push(tmpParticipant);
					}

					this.httpSummonerService.get(tmpParticipant.summonerName, this.currentRegion).subscribe((data) => {
						tmpParticipant['summonerData'] = new SummonerModel(data);
					});


					if ( tmpParticipant.summonerId == this.dataService.summonerData.id) {
						this.myParticipant = tmpParticipant;
						this.myChampion = this.myParticipant.champion;
					}
				}
				this.dataService.spetactorData = new SpectatorModel(data);
				this.dataService.spetactorData.participantsTeam100 = tmpPartipantsTeam100;
				this.dataService.spetactorData.participantsTeam200 = tmpPartipantsTeam200;

				this.dataService.loading = false;
			}
		});
	}

	getUrl(): string {
		if (this.myChampion) {
			return "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + this.myChampion.name + "_0.jpg')";
		} else {
			return "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg')";
		}
	}
}
