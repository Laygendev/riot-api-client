import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { GuideModel } from '../../models/guide.model';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpGuideService {
	constructor(private httpClient: HttpClient) {}

	public get(args: any): Observable<any> {
		let url: string = "http://164.132.69.238:3002/guide/" + args.gameMode + "/" + args.championId;

		if ( args._id ) {
			url = "http://164.132.69.238:3002/guide/" + args._id;
		}

		if ( args.favorite ) {
			url += '/true';
		}

		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public post(data: GuideModel): Observable<any> {
		let url: string = "http://164.132.69.238:3002/guide/";

		let build: GuideModel = new GuideModel(data);

		delete build.starterItemsSlot;
		delete build.buildItemsSlot;

		return this.httpClient.post( url, build, {responseType: 'json'} );
	}

	public put(data: GuideModel): Observable<any> {
		let url: string = "http://164.132.69.238:3002/guide/";

		let build: GuideModel = new GuideModel(data);

		delete build.starterItemsSlot;
		delete build.buildItemsSlot;

		return this.httpClient.put( url, build, {responseType: 'json'} );
	}
}
