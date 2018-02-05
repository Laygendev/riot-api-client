import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpSummonerService {
	constructor(private httpClient: HttpClient) {}

	public get(summonerName: string): Observable<any> {
		let url: string = "http://164.132.69.238:3002/summoner/" + summonerName;
		return this.httpClient.get( url, {responseType: 'json'} );
	}
}
