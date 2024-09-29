import { CardContent } from './ui/card';

interface Player {
	id: number;
	name: string;
	color: string;
}

interface PlayerListProps {
	players: Player[];
}

const colorVariants: Record<string, string> = {
	red: 'bg-red-500',
	orange: 'bg-orange-500',
	white: 'bg-white',
	blue: 'bg-blue-500',
};

export function PlayerList({ players }: PlayerListProps) {
	return (
		<CardContent className='flex flex-col gap-2 justify-center items-center h-full'>
			{players.map(player => {
				const playerColor = player.color;
				return (
					<div key={player.id} className='flex gap-2 items-center'>
						<div
							className={`w-8 h-8 rounded-md border-2 border-gray-500 ${colorVariants[playerColor]}`}
						/>
						<span>{player.name}</span>
					</div>
				);
			})}
		</CardContent>
	);
}
