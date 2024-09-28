import { Card, CardContent } from './components/ui/card';
import { DiceRollChart } from './components/dice-roll-chart';
import { RollHistory } from './components/roll-history';
import { DiceButtons } from './components/dice-buttons';
import { PlayerList } from './components/player-list';

const sampleData = [
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
];

const rollHistory = [
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
];

const players = [
	{ name: 'Player 1', color: 'red' },
	{ name: 'Player 2', color: 'orange' },
	{ name: 'Player 3', color: 'white' },
	{ name: 'Player 4', color: 'blue' },
];

function App() {
	return (
		<div className='grid h-screen grid-cols-1 grid-rows-3 gap-2 md:grid-cols-[75%_25%]'>
			<Card className='order-1 row-span-3'>
				<CardContent className='w-full h-full'>
					<DiceRollChart data={sampleData} />
				</CardContent>
			</Card>
			<Card className='overflow-y-auto order-3 md:order-2'>
				<CardContent className='flex flex-col py-1'>
					<RollHistory rolls={rollHistory} />
				</CardContent>
			</Card>
			<Card className='order-2 md:order-3'>
				<CardContent className='flex justify-center items-center h-full'>
					<DiceButtons onRoll={() => {}} onUndo={() => {}} />
				</CardContent>
			</Card>
			<Card className='order-4'>
				<PlayerList players={players} />
			</Card>
		</div>
	);
}

export default App;
