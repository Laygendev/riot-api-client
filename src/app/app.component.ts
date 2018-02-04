import { Component, OnInit } from '@angular/core';

import { HttpSummonerService } from './services/httpSummoner/http-summoner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

	constructor(private httpSummonerService: HttpSummonerService) {}

	ngOnInit(): void {}

	search(summonerName: string): void {
		this.httpSummonerService.get(summonerName).subscribe((data) => {
			console.log(data);
		});
	}
}
