import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpSummonerService } from '../../services/httpSummoner/http-summoner.service';
import { DataService } from '../../services/data/data.service';

import { SummonerModel } from '../../models/summoner.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	constructor(
		private router: Router,
		private httpSummonerService: HttpSummonerService,
		private dataService: DataService) { }

  ngOnInit() {
  }

	search(summonerName: string): void {
		this.httpSummonerService.get(summonerName).subscribe((data) => {
			let summonerData = new SummonerModel(data);
			this.dataService.summonerData = summonerData;

			this.router.navigate(['/summoner/' + summonerData.id]);
		});
	}

}
