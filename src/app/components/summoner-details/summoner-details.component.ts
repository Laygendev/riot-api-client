import { Component } from '@angular/core';

import { HttpSpectatorService } from '../../services/httpSpectator/http-spectator.service';
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
		private httpSpectatorService: HttpSpectatorService) {
		this.httpSpectatorService.get(this.dataService.summonerData.id).subscribe((data) => {
			let tmpPartipants: Array<ParticipantModel> = new Array<ParticipantModel>();
			for (let key in data.participants) {
				tmpPartipants.push(new ParticipantModel(data.participants[key]));
			}

			delete data.participants;

			this.dataService.spetactorData = new SpectatorModel(data);
			this.dataService.spetactorData.participants = tmpPartipants;
		});
	}

}
