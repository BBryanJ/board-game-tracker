import { CircleX, Pencil, Save } from 'lucide-react';
import { CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

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
		<CardContent className='flex h-full flex-col items-center justify-center gap-2'>
			{players.map(player => {
				return <Player key={player.id} player={player} />;
			})}
		</CardContent>
	);
}

function Player({ player }: { player: Player }) {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div className='group flex w-full items-center justify-start gap-2'>
			<div
				className={`size-8 flex-shrink-0 rounded-md border-2 border-gray-500 ${colorVariants[player.color]}`}
			/>
			{isEditing ? <Input value={player.name} /> : <span>{player.name}</span>}
			{isEditing && (
				<Button
					className='flex-shrink-0'
					variant='ghost'
					size='icon'
					onClick={() => setIsEditing(false)}
				>
					<CircleX className='size-4' />
				</Button>
			)}
			<Button
				className='flex-shrink-0'
				variant='ghost'
				size='icon'
				onClick={() => {
					if (isEditing) {
						setIsEditing(false);
					} else {
						setIsEditing(true);
					}
				}}
			>
				{isEditing ? (
					<Save className='size-4' />
				) : (
					<Pencil className='size-4 opacity-0 group-hover:opacity-100' />
				)}
			</Button>
		</div>
	);
}
