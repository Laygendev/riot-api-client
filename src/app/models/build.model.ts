import { ItemSlotModel } from './itemSlot.model';

export class BuildModel {
	public championId: Number;
	public state: string;
	public itemId: Number[];
	public items: Array<ItemSlotModel>;
	public author: string;

	constructor(fields: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
