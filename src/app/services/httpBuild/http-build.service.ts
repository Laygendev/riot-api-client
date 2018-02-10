import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { BuildModel } from '../../models/build.model';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpBuildService {
	constructor(private httpClient: HttpClient) {}

	public get(championId: number): Observable<any> {
		let url: string = "http://164.132.69.238:3002/build/" + championId;
		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public post(data: BuildModel): Observable<any> {
		let url: string = "http://164.132.69.238:3002/build/";

		return this.httpClient.post( url, data, {responseType: 'json'} );
	}
}
