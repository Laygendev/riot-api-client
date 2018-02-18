export class UserModel {
	public email: string;


	constructor(fields?: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
