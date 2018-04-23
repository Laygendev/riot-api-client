import { ParticipantModel } from './participant.model';

export class SpectatorModel {
	public gameId: number;
	public gameStartTime: number;
	public platformId: string;
	public gameType: number;
	public participantsTeam100: ParticipantModel[];
	public participantsTeam200: ParticipantModel[];

	constructor(fields: any) {
		for (var f in fields) {
			this[f] = fields[f];
		}
	}
}
