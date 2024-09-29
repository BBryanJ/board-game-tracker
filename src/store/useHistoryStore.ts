import { create } from 'zustand';

type Roll = {
	player: string;
	value: number;
};

type State = {
	rolls: Roll[];
};

type Actions = {
	addRoll: (roll: Roll) => void;
	undoRoll: () => void;
};

export const useHistoryStore = create<State & Actions>(set => ({
	rolls: [
		{ player: 'Player 1', value: 8 },
		{ player: 'Player 2', value: 4 },
		{ player: 'Player 3', value: 11 },
		{ player: 'Player 4', value: 6 },
		{ player: 'Player 1', value: 9 },
		{ player: 'Player 2', value: 3 },
		{ player: 'Player 3', value: 7 },
		{ player: 'Player 4', value: 12 },
		{ player: 'Player 1', value: 5 },
		{ player: 'Player 2', value: 10 },
		{ player: 'Player 3', value: 2 },
		{ player: 'Player 4', value: 8 },
	],
	addRoll: (roll: Roll) => set(state => ({ rolls: [...state.rolls, roll] })),
	undoRoll: () => set(state => ({ rolls: state.rolls.slice(0, -1) })),
}));
