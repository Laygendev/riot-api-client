export class ChampionModel {
	public image: any;
	public name: string;
	public id: number;
	public title: string;
	public key: string;

	constructor(fields: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
