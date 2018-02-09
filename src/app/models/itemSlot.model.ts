import { ItemModel } from './item.model';

export class ItemSlotModel {
	public item: ItemModel;
	public empty: boolean = true;

	constructor(fields: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
