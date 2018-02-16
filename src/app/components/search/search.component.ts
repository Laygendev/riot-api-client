import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpSpectatorService } from '../../services/httpSpectator/http-spectator.service';
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

	public searchForm: FormGroup;
	public summonerName: FormControl;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private httpStatusService: HttpStatusService,
		private httpSummonerService: HttpSummonerService,
		private httpSpectatorService: HttpSpectatorService,
		private dataService: DataService) {
			this.createFormControls();
			this.createForm();
			this.checkServerStatus();
		}


	createFormControls(): void {
		this.summonerName = new FormControl('', Validators.required);
	}

	createForm(): void {
		this.searchForm = new FormGroup({
			summonerName: this.summonerName
		});
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
	onSubmit(): void {
		this.httpSummonerService.get(this.searchForm.value.summonerName).subscribe((data) => {
			if ( data.status && 200 !== data.status.status_code) {
				this.errorMessage = data.status.status_code + ' ' + data.status.message;
			} else {
				let summonerData = new SummonerModel(data);
				this.dataService.summonerData = summonerData;

				this.httpSpectatorService.get(this.dataService.summonerData.id).subscribe((data) => {
					if ( data.status && 200 !== data.status.status_code) {
						this.errorMessage = data.status.status_code + ' ' + 'This summoner is not in a match for now.';
					} else {
						this.router.navigate(['/summoner/' + this.searchForm.value.summonerName]);
					}
				});


			}
		});
	}
}
