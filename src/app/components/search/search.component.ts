import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpSpectatorService } from './../../services/httpSpectator/http-spectator.service';
import { HttpSummonerService } from './../../services/httpSummoner/http-summoner.service';
import { HttpStatusService } from './../../services/httpStatus/http-status.service';
import { DataService } from './../../services/data/data.service';
import { TitleService } from './../../services/title/title.service';

import { SummonerModel } from './../../models/summoner.model';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent {
	public errorMessage: string;

	public searchForm: FormGroup;
	public summonerName: FormControl;

	public loaded: false;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private httpStatusService: HttpStatusService,
		private httpSummonerService: HttpSummonerService,
		private httpSpectatorService: HttpSpectatorService,
		public dataService: DataService,
		private titleService: TitleService) {
			titleService.setTitle('Home - LoL Hype');

			this.createFormControls();
			this.createForm();
		}

	createFormControls(): void {
		this.summonerName = new FormControl('', Validators.required);
	}

	createForm(): void {
		this.searchForm = new FormGroup({
			summonerName: this.summonerName
		});
	}

	switchRegion(region: string): void {
		this.dataService.currentRegion = region;
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
		var patt = /^[A-Za-z0-9\\p{L} _\\.]+$/;
		if ( ! patt.test(this.searchForm.value.summonerName) ) {
			this.errorMessage = "Summoner name is not valid";
		} else {
			this.httpSummonerService.get(this.searchForm.value.summonerName, this.dataService.currentRegion).subscribe((data) => {
				if ( data.status && 200 !== data.status.status_code) {
					this.errorMessage = data.status.status_code + ' ' + data.status.message;
				} else {
					let summonerData = new SummonerModel(data);
					this.dataService.summonerData = summonerData;

					this.httpSpectatorService.get(this.dataService.summonerData.id, this.dataService.currentRegion).subscribe((data) => {
						if ( data.status && 200 !== data.status.status_code) {
							this.errorMessage = data.status.status_code + ' ' + 'This summoner ' + this.searchForm.value.summonerName + ' is not in a match for now.';
						} else {
							this.router.navigate(['/summoner/' + this.dataService.currentRegion + '/' + this.searchForm.value.summonerName]);
						}
					});


				}
			});
		}
	}
}
