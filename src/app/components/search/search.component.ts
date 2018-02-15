import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpSummonerService } from '../../services/httpSummoner/http-summoner.service';
import { HttpStatusService } from '../../services/httpStatus/http-status.service';
import { DataService } from '../../services/data/data.service';

import { SummonerModel } from '../../models/summoner.model';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent {
	public serverStatus: any;
	public errorMessage: string;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private httpStatusService: HttpStatusService,
		private httpSummonerService: HttpSummonerService,
		private dataService: DataService) {
			this.checkServerStatus();
		}

	/**
	 * Check the status of the serverStatus
	 *
	 * @since 0.2.0
	 * @version 0.2.0
	 */
	checkServerStatus(): void {
		this.httpStatusService.get().subscribe((data) => {
			this.serverStatus = data;
		});
	}

	/**
	 * Use httpSummonerService to find data by summonerName.
	 *
	 * If player is founded, router navigate to /summoner/summonerName page.
	 * If player is not founded, just display message "Player not exists".
	 *
	 * @since 0.1.0
	 * @version 0.1.0
	 *
	 * @param string summonerName The summoner name typed in the input.
	 *
	 * @return void.
	 */
	search(summonerName: string): void {
		this.httpSummonerService.get(summonerName).subscribe((data) => {
			if ( data.status && 200 !== data.status.status_code) {
				this.errorMessage = data.status.status_code + ' ' + data.status.message;
			} else {
				let summonerData = new SummonerModel(data);
				this.dataService.summonerData = summonerData;

				this.router.navigate(['/summoner/' + summonerName]);
			}
		});
	}

}
