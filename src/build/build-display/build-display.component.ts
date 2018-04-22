import { Component, OnInit, Input } from '@angular/core';

import { DataService } from './../../app/services/data/data.service';
import { GuideModel } from './../../app/models/guide.model';
import { ItemModel } from './../../app/models/item.model';

@Component({
	selector: 'build-display',
	templateUrl: './build-display.component.html',
	styleUrls: ['./build-display.component.css']
})
export class BuildDisplayComponent implements OnInit {
	private _guide: GuideModel;
	public buildItems: Array<ItemModel> = new Array<ItemModel>(undefined,undefined,undefined,undefined,undefined,undefined);

	@Input()
	set guide(guide: GuideModel) {
		this._guide = guide;
	}

	get guide(): GuideModel { return this._guide; }

	constructor(public dataService: DataService) { }

	ngOnInit() {
		this.getItemsInGuide(this._guide, 'buildItems')
	}

	getItemsInGuide(build: GuideModel, category: string): void {
		for (let key in build[category + 'SlotId']) {
			this[category][key] = this.dataService.getItemById(build[category + 'SlotId'][key]);
		}
	}

}
