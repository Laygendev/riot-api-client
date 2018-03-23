import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpStatusService {
	constructor(private httpClient: HttpClient) {}

	public get(): Observable<any> {
		let url: string = "http://54.36.43.4:3002/status";
		return this.httpClient.get( url, {responseType: 'json'} );
	}
}
