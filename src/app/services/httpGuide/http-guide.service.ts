import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { GuideModel } from '../../models/guide.model';

import { DataService } from './../data/data.service';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpGuideService {
	constructor(
		private httpClient: HttpClient,
		private dataService: DataService) {}

	public get(args?: any): Observable<any> {
		let url: string = "http://164.132.69.238:3002/guide/";

		if ( args && args.gameMode && args.championId ) {
			url += args.gameMode + "/" + args.championId;
		}

		if ( args && args._id ) {
			url = "http://164.132.69.238:3002/guide/" + args._id;
		}

		if ( args && args.favorite ) {
			url += '/' + this.dataService.realms.data.v + '/true';
		}

		if ( ! args ) {
			url = "http://164.132.69.238:3002/guides";
		}

		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public getByAuthorId(authorId: string): Observable<any> {
		let url: string = "http://164.132.69.238:3002/guide/author/" + authorId;

		return this.httpClient.get( url, {responseType: 'json'} );
	}

	public getFavorite(args?: any): Observable<any> {
		let url: string = "http://164.132.69.238:3002/guide-favorite/";

		if ( args && args.gameMode && args.championId ) {
			url += this.dataService.realms.data.v + "/" + args.gameMode + "/" + args.championId;
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

	public vote(guideId: string, userId: string): Observable<any> {
		let url: string = "http://164.132.69.238:3002/vote/";

		let data = {
			_id: guideId,
			userId: userId,
		};

		return this.httpClient.post( url, data, {responseType: 'json'} );
	}
}
