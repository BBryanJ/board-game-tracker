import { create } from 'zustand';

type Player = {
	id: number;
	name: string;
	color: string;
};

type State = {
	players: Player[];
};

type Actions = {
	updatePlayerName: (id: number, name: string) => void;
};

export const usePlayersStore = create<State & Actions>(set => ({
	players: [
		{ id: 0, name: 'Player 1', color: 'red' },
		{ id: 1, name: 'Player 2', color: 'orange' },
		{ id: 2, name: 'Player 3', color: 'white' },
		{ id: 3, name: 'Player 4', color: 'blue' },
	],
	updatePlayerName: (id: number, name: string) =>
		set(state => ({
			players: state.players.map(player =>
				player.id === id ? { ...player, name } : player,
			),
		})),
}));
