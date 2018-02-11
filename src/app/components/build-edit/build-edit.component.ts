import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data/data.service';
import { HttpBuildService } from '../../services/httpBuild/http-build.service';

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

	public editMode: string = "ARAM";

	constructor(
		public route: ActivatedRoute,
		public dataService: DataService,
		public httpBuildService: HttpBuildService
	) {
		this.route.params.subscribe(param => {
			this.champion = this.dataService.getChampionById(param.id);

			this.getBuild();
		});
	}

	ngOnInit() {}

	getBuild(): void {
		this.httpBuildService.get(this.champion.id, this.editMode).subscribe((data) => {
			if ( data ) {
				this.build = data;

				this.build.items = new Array<ItemSlotModel>();

				for(let key in this.build.itemsId) {
					let itemSlot: ItemSlotModel = new ItemSlotModel(undefined);

					if ( this.build.itemsId ) {
						let item: ItemModel = this.dataService.getItemById(this.build.itemsId[key]);
						itemSlot.empty = false;
						itemSlot.item = item;
					} else {
						itemSlot.empty = true;
					}

					this.build.items.push(itemSlot);

				}
			} else {
				this.build = new BuildModel(undefined);
				this.build.items = new Array<ItemSlotModel>(new ItemSlotModel(undefined),new ItemSlotModel(undefined),new ItemSlotModel(undefined),new ItemSlotModel(undefined),new ItemSlotModel(undefined),new ItemSlotModel(undefined));
			}
		});
	}

	setEditMode(name: string): void {
		this.editMode = name;
		this.build.gameMode = this.editMode;
	}

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
		this.build.itemsId = new Array<Number>();
		for (let key in this.build.items) {
			this.build.itemsId.push(this.build.items[key].item.id);
		}

		this.build.championId = this.champion.id;
		this.build.gameMode = this.editMode;
		this.httpBuildService.post(this.build).subscribe((data) => {
			console.log(data);
		})
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
