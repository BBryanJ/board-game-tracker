import { create } from 'zustand';

type Roll = {
	player: string;
	value: number;
};

type State = {
	rolls: Roll[];
};

export const useHistoryStore = create<State>(() => ({
	rolls: [
		{ player: 'Player 1', value: 5 },
		{ player: 'Player 2', value: 7 },
		{ player: 'Player 3', value: 2 },
		{ player: 'Player 4', value: 10 },
		{ player: 'Player 1', value: 5 },
		{ player: 'Player 2', value: 7 },
		{ player: 'Player 3', value: 2 },
		{ player: 'Player 4', value: 10 },
		{ player: 'Player 1', value: 5 },
		{ player: 'Player 2', value: 7 },
		{ player: 'Player 3', value: 2 },
		{ player: 'Player 4', value: 10 },
	],
}));
