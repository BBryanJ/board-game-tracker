import { CardContent } from './ui/card';

interface Player {
	name: string;
	color: string;
}

interface PlayerListProps {
	players: Player[];
}

export function PlayerList({ players }: PlayerListProps) {
	return (
		<CardContent className='flex h-full flex-col items-center gap-2'>
			{players.map((player, index) => (
				<div key={index} className='flex items-center gap-2'>
					<div
						className={`h-8 w-8 rounded-md border-2 border-gray-500 bg-${player.color}-500`}
					/>
					<span>{player.name}</span>
				</div>
			))}
		</CardContent>
	);
}
