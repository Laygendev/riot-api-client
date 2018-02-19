export class UserModel {
	public _id: string;
	public email: string;
	public pwd: string;
	public pseudo: string;


	constructor(fields?: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
