import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class StaticDataService {
	constructor(
		private httpClient: HttpClient
	) {}

	public get(endpoint: string, args: any): Observable<any> {
		let url: string = "https://server.guideslol.com/static-data/champions/" + args.championId;
		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public getItems(): Observable<any> {
		let url: string = "https://server.guideslol.com/static-data/items/en_US";
		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public getChampions(): Observable<any> {
		let url: string = "https://server.guideslol.com/static-data/champions";
		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public getRealms(): Observable<any> {
		let url: string = "https://server.guideslol.com/realms";
		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public getRegions(): Observable<any> {
		return this.httpClient.get("https://guideslol.com/assets/json/regions.json", { responseType: 'json'});
	}

	public getSummoners(): Observable<any> {
		let url: string = "https://server.guideslol.com/static-data/summoner";
		return this.httpClient.get( url, {responseType: 'json'} );
	}
}
