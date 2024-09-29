import { create } from 'zustand';

type State = {
	data: {
		name: string;
		count: number;
	}[];
};

type Actions = {
	addToRollData: (name: string) => void;
	removeToRollData: (name: string) => void;
};

export const useRollsStore = create<State & Actions>(set => ({
	data: [
		{
			name: '2',
			count: 1,
		},
		{
			name: '3',
			count: 7,
		},
		{
			name: '4',
			count: 4,
		},
		{
			name: '5',
			count: 6,
		},
		{
			name: '6',
			count: 9,
		},
		{
			name: '7',
			count: 8,
		},
		{
			name: '8',
			count: 4,
		},
		{
			name: '9',
			count: 7,
		},
		{
			name: '10',
			count: 3,
		},
		{
			name: '11',
			count: 2,
		},
		{
			name: '12',
			count: 1,
		},
	],
	addToRollData: (name: string) => {
		set(state => {
			return {
				data: state.data.map(item =>
					item.name === name ? { ...item, count: item.count + 1 } : item,
				),
			};
		});
	},
	removeToRollData: (name: string) => {
		set(state => {
			return {
				data: state.data.map(item =>
					item.name === name
						? { ...item, count: Math.max(item.count - 1, 0) }
						: item,
				),
			};
		});
	},
}));
