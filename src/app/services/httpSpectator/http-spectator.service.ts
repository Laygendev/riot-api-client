import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpSpectatorService {
	constructor(private httpClient: HttpClient) {}

	public get(summonerId: number): Observable<any> {
		let url: string = "http://164.132.69.238:3002/spectator/" + summonerId;
		return this.httpClient.get( url, {responseType: 'json'} );
	}
}
