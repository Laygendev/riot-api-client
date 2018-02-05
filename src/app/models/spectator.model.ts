import { ParticipantModel } from './participant.model';

export class SpectatorModel {
	public gameId: number;
	public gameStartTime: number;
	public platformId: string;
	public gameType: number;
	public participants: ParticipantModel[];

	constructor(fields: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
