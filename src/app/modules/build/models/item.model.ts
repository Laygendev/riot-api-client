export class ItemModel {
	public iconPath: string;
	public name: string;
	public id: number;
	public inStore: boolean;
	public description: string;
	public safeDescription: any;
	public modeNameInclusions: any;
	public isEnchantment: boolean;

	constructor(fields?: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
