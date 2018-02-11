import { ItemSlotModel } from './itemSlot.model';
import { ItemModel } from './item.model';

export class BuildModel {
	public championId: Number;
	public state: string;
	public itemsId: Array<Number>;
	public items: Array<ItemSlotModel>;
	public nitems: Array<ItemModel>;
	public author: string;
	public gameMode: string;

	constructor(fields: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
