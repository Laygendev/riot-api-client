export class UserModel {
	public _id: string;
	public mail: string;
	public password: string;
	public pseudo: string;


	constructor(fields?: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
