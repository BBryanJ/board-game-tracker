import { create } from 'zustand';

type Player = {
	name: string;
	color: string;
};

type State = {
	players: Player[];
};

export const usePlayersStore = create<State>(() => ({
	players: [
		{ name: 'Player 1', color: 'red' },
		{ name: 'Player 2', color: 'orange' },
		{ name: 'Player 3', color: 'white' },
		{ name: 'Player 4', color: 'blue' },
	],
}));
