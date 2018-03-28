import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpSpectatorService {
	constructor(private httpClient: HttpClient) {}

	public get(summonerId: number, region: string): Observable<any> {
		let url: string = "https://server.guideslol.com/spectator/" + region + "/" + summonerId;
		return this.httpClient.get( url, {responseType: 'json'} );
	}
}
