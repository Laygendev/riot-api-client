import { Component } from '@angular/core';
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

	constructor(
		public route: ActivatedRoute,
		public dataService: DataService,
		public httpBuildService: HttpBuildService
	) {
		this.build = new BuildModel();

		this.route.params.subscribe(params => {
			this.params = params;
			this.build.championId = params.championId;
			this.build.gameMode = params.gameMode;

			this.champion = this.dataService.getChampionById(params.championId);

			this.getBuild();
		});
	}

	getBuild(): void {
		let buildId: Number = this.params.buildId ? this.params.buildId : 0;

		this.httpBuildService.get({
			buildId: buildId
		}).subscribe((data) => {
			if ( data ) {}
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
}
