import { Card, CardContent } from './components/ui/card';
import { DiceRollChart } from './components/dice-roll-chart';
import { RollHistory } from './components/roll-history';
import { DiceButtons } from './components/dice-buttons';
import { PlayerList } from './components/player-list';
import { usePlayersStore } from './store/usePlayersStore';
import { useHistoryStore } from './store/useHistoryStore';
import { useRollsStore } from './store/useRollsStore';

function App() {
	const players = usePlayersStore(state => state.players);
	const rollHistory = useHistoryStore(state => state.rolls);
	const rolls = useRollsStore(state => state.data);

	return (
		<div className='grid h-screen grid-cols-1 grid-rows-3 gap-2 md:grid-cols-[75%_25%]'>
			<Card className='order-1 row-span-3'>
				<CardContent className='h-full w-full'>
					<DiceRollChart data={rolls} />
				</CardContent>
			</Card>
			<Card className='order-3 overflow-y-auto md:order-2'>
				<CardContent className='flex flex-col py-1'>
					<RollHistory rolls={rollHistory} />
				</CardContent>
			</Card>
			<Card className='order-2 md:order-3'>
				<CardContent className='flex h-full items-center justify-center'>
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
