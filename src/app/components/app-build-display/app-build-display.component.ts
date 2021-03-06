import { Component, OnInit, Input } from '@angular/core';

import { DataService } from './../../services/data/data.service';
import { GuideModel } from './../../models/guide.model';
import { ItemModel } from './../../models/item.model';

@Component({
  selector: 'app-build-display',
  templateUrl: './app-build-display.component.html',
  styleUrls: ['./app-build-display.component.css']
})
export class AppBuildDisplayComponent implements OnInit {
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
