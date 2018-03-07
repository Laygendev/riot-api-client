export class SummonerSpellModel {
	public id: number;
	public name: string;
	public image: any;

	constructor(fields: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}

}
