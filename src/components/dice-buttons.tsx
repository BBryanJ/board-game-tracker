import { Button } from './ui/button';

interface DiceButtonsProps {
	onRoll: (value: number) => void;
	onUndo: () => void;
}

export function DiceButtons({ onRoll, onUndo }: DiceButtonsProps) {
	return (
		<div className='grid grid-cols-3 gap-2'>
			{[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(value => (
				<Button key={value} variant='outline' onClick={() => onRoll(value)}>
					{value}
				</Button>
			))}
			<Button variant='outline' onClick={onUndo}>
				Undo
			</Button>
		</div>
	);
}
