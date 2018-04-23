export class SummonerModel {
	public accountId: number;
	public id: number;
	public name: string;
	public profileIconId: number;
	public revisionDate: number;
	public summonerLevel: number;

	constructor(fields: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}

}
