import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TitleService {
	private subject = new Subject<any>();

	constructor() { }

	setTitle(title: string) {
		this.subject.next(title);
	}

	getTitle(): Observable<any> {
		return this.subject.asObservable();
	}
}
