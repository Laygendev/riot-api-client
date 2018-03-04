import { ItemSlotModel } from './itemSlot.model';
import { ItemModel } from './item.model';

export class GuideModel {
	public _id: string;
	public championId: Number;
	public authorId: string;
	public state: string;
	public starterItemsSlot: Array<ItemSlotModel>;
	public starterItemsSlotId: Array<Number>;
	public buildItemsSlot: Array<ItemSlotModel>;
	public buildItemsSlotId: Array<Number>;
	public author: string;
	public gameMode: string;
	public favorite: boolean;
	public version: string;
	public createdDate: string;
	public modifiedDate: string;

	constructor(fields?: any) {
		this.starterItemsSlot = new Array<ItemSlotModel>();
		this.buildItemsSlot   = new Array<ItemSlotModel>();

		for (let i: any = 0; i < 2; i++) {
			this.starterItemsSlot.push( new ItemSlotModel() );
		}

		for (let i: any = 0; i < 6; i++) {
			this.buildItemsSlot.push( new ItemSlotModel() );
		}

		this.starterItemsSlotId = new Array<Number>(-1, -1);
		this.buildItemsSlotId   = new Array<Number>(-1, -1, -1, -1, -1, -1);

		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
