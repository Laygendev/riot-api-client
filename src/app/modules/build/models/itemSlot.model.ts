import { ItemModel } from './item.model';

export class ItemSlotModel {
	public item: ItemModel;

	constructor(fields?: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
