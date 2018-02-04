import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {
	constructor(private httpClient: HttpClient) {}

	public get(): Observable<any> {
		let url: string = "https://164.132.69.238:3002/summoner/bearbehindpc";
		return this.httpClient.get( url, {responseType: 'json'} );
	}
}
