import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
export class BuildEditComponent {
	public params: any;
	public champion: ChampionModel;
	public build: BuildModel;

	public updatedBuild: boolean = false;
	public userForm: FormGroup;
	public email: FormControl;
	public name: FormControl;

	constructor(
		public route: ActivatedRoute,
		public dataService: DataService,
		public httpBuildService: HttpBuildService
	) {
		this.createFormControls();
		this.createForm();

		this.build = new BuildModel();

		this.route.params.subscribe(params => {
			this.params = params;

			if ( params.championId && params.gameMode ) {
				this.build.championId = params.championId;
				this.build.gameMode = params.gameMode;

				this.champion = this.dataService.getChampionById(params.championId);
			}

			this.getBuild();
		});
	}

	createFormControls(): void {
		this.email = new FormControl('', Validators.required);
		this.name  = new FormControl('', Validators.required);
	}

	createForm(): void {
		this.userForm = new FormGroup({
			email: this.email,
			name: this.name
		});
	}


	getBuild(): void {
		let buildId: Number = this.params.buildId ? this.params.buildId : 0;

		this.httpBuildService.get({
			_id: buildId,
			gameMode: this.build.gameMode,
			championId: this.build.championId,
			number: 1
		}).subscribe((data) => {
			if (data) {

				if (data.championId) {
					this.build = new BuildModel(data);
				}

				if ( this.build.championId > 0 ) {
					this.champion = this.dataService.getChampionById(this.build.championId);
				}

				for (let key in this.build.starterItemsSlotId) {
					let tmpItemSlot: ItemSlotModel = new ItemSlotModel({ item: this.dataService.getItemById(this.build.starterItemsSlotId[key]) });

					this.build.starterItemsSlot[key] = tmpItemSlot;
				}

				for (let key in this.build.buildItemsSlotId) {
					let tmpItemSlot: ItemSlotModel = new ItemSlotModel({ item: this.dataService.getItemById(this.build.buildItemsSlotId[key]) });

					this.build.buildItemsSlot[key] = tmpItemSlot;
				}
			}
		});
	}

	selectItem(section: string, index: number, item: ItemModel): void {
		if (! this.build[section]) {
			return;
		}

		this.build[section][index].item   = item;
		this.build[section + 'Id'][index] = item.id;
	}

	update(): void {
		this.httpBuildService.post(this.build).subscribe((data) => {
			this.updatedBuild = true;
		});
	}

	registerUser(): void {
		console.log(this.userForm);
	}
}
