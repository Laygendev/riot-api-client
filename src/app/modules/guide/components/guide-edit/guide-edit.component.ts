import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '@app/services/data/data.service';
import { HttpGuideService } from '@app/services/httpGuide/http-guide.service';
import { HttpUserService } from '@app/modules/user/services/http-user/http-user.service';

import { ChampionModel } from '@app/modules/guide/models/champion.model';
import { ItemModel } from '@app/modules/build/models/item.model';
import { ItemSlotModel } from '@app/modules/build/models/itemSlot.model';
import { GuideModel } from '@app/modules/guide/models/guide.model';
import { UserModel } from '@app/modules/user/models/user.model';

@Component({
  selector: 'app-guide-edit',
  templateUrl: './guide-edit.component.html',
  styleUrls: ['./guide-edit.component.css']
})
export class GuideEditComponent implements OnInit {
	public loading: boolean = true;
	public params: any;
	public champion: ChampionModel;
	public guide: GuideModel;
	public items: Array<ItemModel> = new Array<ItemModel>();

	public updatedBuild: boolean = false;
	public createdBuild: boolean = false;

  subscription: Subscription;

	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public dataService: DataService,
		public httpGuideService: HttpGuideService,
		public httpUserService: HttpUserService
	) {
		if ( ! this.dataService.user || ( this.dataService.user && ! this.dataService.user._id ) ) {
			this.router.navigate(['/']);
		}

		this.subscription = this.dataService.getInitied().subscribe(() => {
			this.dataService.waitComponentLoad = true;
			this.dataService.loading = true;

			this.guide = new GuideModel();
			this.guide.author = this.dataService.user._id;

			this.route.params.subscribe(params => {
				this.params = params;

				if ( params.championId && params.gameMode ) {
					this.guide.championId = params.championId;
					this.guide.gameMode = params.gameMode;

					if (! this.items.length) {
						this.items = this.dataService.getItemByMode(this.guide.gameMode);
					}

					this.champion = this.dataService.getChampionById(params.championId);
				}

				this.getGuide();
			});
		});
	}

	ngOnInit(): void {
		this.dataService.waitComponentLoad = true;
		this.dataService.loading = true;
	}

	ngOnDestroy() {
    	this.subscription.unsubscribe();
	}

	getGuide(): void {
		this.dataService.loading = true;

		let guideId: Number = this.params.guideId ? this.params.guideId : 0;

		this.httpGuideService.get({
			_id: guideId,
			gameMode: this.guide.gameMode,
			championId: this.guide.championId,
			number: 1
		}).subscribe((data) => {
			if (data) {
				if (data.championId) {
					this.guide = new GuideModel(data);
				}

				if ( this.guide.championId > 0 ) {
					this.champion = this.dataService.getChampionById(this.guide.championId);
				}

				if ( this.guide.gameMode ) {
					if (! this.items.length) {
						this.items = this.dataService.getItemByMode(this.guide.gameMode);
					}
				}

				for (let key in this.guide.starterItemsSlotId) {
					let tmpItemSlot: ItemSlotModel = new ItemSlotModel({ item: this.dataService.getItemById(this.guide.starterItemsSlotId[key]) });

					this.guide.starterItemsSlot[key] = tmpItemSlot;
				}

				for (let key in this.guide.buildItemsSlotId) {
					let tmpItemSlot: ItemSlotModel = new ItemSlotModel({ item: this.dataService.getItemById(this.guide.buildItemsSlotId[key]) });

					this.guide.buildItemsSlot[key] = tmpItemSlot;
				}

				this.dataService.loading = false;
			}
		});
	}

	selectItem(section: string, index: number, item: ItemModel): void {
		if (! this.guide[section]) {
			return;
		}

		this.guide[section][index].item   = item;
		this.guide[section + 'Id'][index] = item.id;
	}

	update(): void {
		if (this.guide._id) {
			this.httpGuideService.put(this.guide, 'updateGuide').subscribe((data) => {
				this.guide = new GuideModel(data);
				this.updatedBuild = true;
			});
		} else {
			this.httpGuideService.post(this.guide).subscribe((data) => {
				this.guide = new GuideModel(data);
				this.createdBuild = true;
			});
		}
	}

	getUrl(): string {
		if (this.champion) {
			return "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + this.champion.name.replace( ' ', '' ) + "_0.jpg')";
		}
	}
}
