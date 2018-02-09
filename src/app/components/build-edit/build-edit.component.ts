import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data/data.service';

import { ChampionModel } from '../../models/champion.model';
import { ItemModel } from '../../models/item.model';
import { ItemSlotModel } from '../../models/itemSlot.model';
import { BuildModel } from '../../models/build.model';

@Component({
  selector: 'app-build-edit',
  templateUrl: './build-edit.component.html',
  styleUrls: ['./build-edit.component.css']
})
export class BuildEditComponent implements OnInit {
	public champion: ChampionModel;
	public build: BuildModel;

	constructor(
		public route: ActivatedRoute,
		public dataService: DataService,
	) {
		this.route.params.subscribe(param => {
			this.champion = this.dataService.getChampionById(param.id);
			this.build = new BuildModel(undefined);
			this.build.items = new Array<ItemSlotModel>(new ItemSlotModel(undefined),new ItemSlotModel(undefined),new ItemSlotModel(undefined),new ItemSlotModel(undefined),new ItemSlotModel(undefined),new ItemSlotModel(undefined));
		});
	}

	ngOnInit() {}

	addToCase(item: ItemModel): void {
		let nextIndex: any  = this.nextSlot();

		if ( nextIndex != -1 ) {
			this.build.items[nextIndex].empty = false;
			this.build.items[nextIndex].item = item;
		}
	}

	clearCase(item: ItemSlotModel): void {
		item.item = undefined;
		item.empty = true;
	}

	set(): void {
		console.log(this.build.items);
	}

	nextSlot(): any {
		for (let key in this.build.items) {
			if ( this.build.items[key].empty ) {
				return key;
			}
		}

		return -1;
	}

}
