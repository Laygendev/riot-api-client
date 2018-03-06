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
		let url: string = "http://164.132.69.238:3002/static-data/champions/" + args.championId;
		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public getItems(): Observable<any> {
		let url: string = "http://164.132.69.238:3002/static-data/items/" + navigator.language;
		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public getRealms(): Observable<any> {
		let url: string = "http://164.132.69.238:3002/realms";
		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public getRegions(): Observable<any> {
		return this.httpClient.get("./assets/json/regions.json", { responseType: 'json'});
	}
}
