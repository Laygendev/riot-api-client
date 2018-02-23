import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../../services/data/data.service';
import { HttpGuideService } from './../../services/httpGuide/http-guide.service';
import { HttpUserService } from './../../services/httpUser/http-user.service';

import { ChampionModel } from './../../models/champion.model';
import { ItemModel } from './../../models/item.model';
import { ItemSlotModel } from './../../models/itemSlot.model';
import { GuideModel } from './../../models/guide.model';
import { UserModel } from './../../models/user.model';

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

	public updatedBuild: boolean = false;
	public userForm: FormGroup;
	public email: FormControl;
	public pseudo: FormControl;

	constructor(
		public route: ActivatedRoute,
		public dataService: DataService,
		public httpGuideService: HttpGuideService,
		public httpUserService: HttpUserService,
	) {
		this.dataService.waitComponentLoad = true;
		this.dataService.loading = true;
		this.createFormControls();
		this.createForm();

		this.guide = new GuideModel();

		this.route.params.subscribe(params => {
			this.params = params;

			if ( params.championId && params.gameMode ) {
				this.guide.championId = params.championId;
				this.guide.gameMode = params.gameMode;

				this.champion = this.dataService.getChampionById(params.championId);
			}

			this.getGuide();
		});
	}

	ngOnInit(): void {
		this.dataService.waitComponentLoad = true;
		this.dataService.loading = true;
	}

	createFormControls(): void {
		this.email  = new FormControl('', Validators.required);
		this.pseudo = new FormControl('', Validators.required);
	}

	createForm(): void {
		this.userForm = new FormGroup({
			email: this.email,
			name: this.pseudo
		});
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
		this.httpGuideService.post(this.guide).subscribe((data) => {
			this.updatedBuild = true;
		});
	}

	registerUser(): void {
		let userModel: UserModel = new UserModel(this.userForm.value);

		this.httpUserService.post(userModel).subscribe((data) => {
			console.log('ok');
		});
	}

	getUrl(): string {
		return "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + this.champion.name + "_0.jpg')";
	}
}
