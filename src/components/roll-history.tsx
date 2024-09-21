import { CardContent } from './ui/card';

interface Roll {
	player: string;
	value: number;
}

interface RollHistoryProps {
	rolls: Roll[];
}

export function RollHistory({ rolls }: RollHistoryProps) {
	return (
		<CardContent className='flex flex-col py-1'>
			{rolls.map((roll, index) => (
				<div
					key={index}
					className={`w-full ${getPlayerColor(roll.player)} px-2`}
				>
					<span>
						<b className='font-bold'>{roll.player}</b> rolled a{' '}
						<b className='font-semibold'>{roll.value}</b>
					</span>
				</div>
			))}
		</CardContent>
	);
}

function getPlayerColor(player: string) {
	switch (player) {
		case 'Player 1':
			return 'bg-red-300';
		case 'Player 2':
			return 'bg-orange-300';
		case 'Player 3':
			return 'bg-white';
		case 'Player 4':
			return 'bg-blue-300';
		default:
			return 'bg-white';
	}
}
