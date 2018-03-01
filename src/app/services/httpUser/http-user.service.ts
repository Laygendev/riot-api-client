import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { UserModel } from '../../models/user.model';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpUserService {
	constructor(private httpClient: HttpClient) {}

	public get(args: any): Observable<any> {
		let url: string = "http://164.132.69.238:3002/user/" + args.email + "/" + args.pwd;

		if ( args._id ) {
			url = "http://164.132.69.238:3002/user/" + args._id;
		}

		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public post(data: UserModel): Observable<any> {
		let url: string = "http://164.132.69.238:3002/user/";

		return this.httpClient.post( url, data, {responseType: 'json'} );
	}

	public auth(data: UserModel): Observable<any> {
		let url: string = "http://164.132.69.238:3002/user/auth";

		return this.httpClient.post( url, data, {responseType: 'json'} );
	}
}
