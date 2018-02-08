export class ItemModel {
	public image: any;
	public name: string;
	public id: number;
	public description: string;
	public plaintext: string;
	public stats: object;

	constructor(fields: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
