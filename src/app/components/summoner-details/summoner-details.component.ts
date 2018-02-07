import { Component } from '@angular/core';

import { HttpSpectatorService } from '../../services/httpSpectator/http-spectator.service';
import { StaticDataService } from '../../services/staticData/static-data.service';
import { DataService } from '../../services/data/data.service';

import { ParticipantModel } from '../../models/participant.model';
import { SpectatorModel } from '../../models/spectator.model';

@Component({
  selector: 'app-summoner-details',
  templateUrl: './summoner-details.component.html',
  styleUrls: ['./summoner-details.component.css']
})
export class SummonerDetailsComponent  {

	constructor(
		public dataService: DataService,
		private httpSpectatorService: HttpSpectatorService,
		private staticDataService: StaticDataService) {
		this.httpSpectatorService.get(this.dataService.summonerData.id).subscribe((data) => {
			let tmpPartipants: Array<ParticipantModel> = new Array<ParticipantModel>();
			for (let key in data.participants) {
				let tmpParticipant = new ParticipantModel(data.participants[key]);

				staticDataService.get('', {
					championId: tmpParticipant.championId
				}).subscribe((championData) => {
					tmpParticipant.champion = championData;
					tmpPartipants.push(tmpParticipant);
				});
			}

			this.dataService.spetactorData = new SpectatorModel(data);
			console.log(tmpPartipants);
			this.dataService.spetactorData.participants = tmpPartipants;
		});
	}

}
