import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

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

function App() {
	return (
		<div className='grid h-screen grid-cols-[75%_25%] grid-rows-3 gap-2'>
			<Card className='row-span-3'>
				<CardContent className='h-full w-full'>
					<ResponsiveContainer width='100%' height='100%'>
						<BarChart data={sampleData}>
							<XAxis dataKey='name' />
							<YAxis />
							<Bar dataKey='count' fill='#8884d8' />
						</BarChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
			<Card className='overflow-y-auto'>
				<CardContent className='flex flex-col py-1'>
					<div className='w-full bg-red-300 px-2'>
						<span>
							<b className='font-bold'>Player 1</b> rolled a{' '}
							<b className='font-semibold'>5</b>
						</span>
					</div>
					<div className='w-full bg-orange-300 px-2'>
						<span>
							<b className='font-bold'>Player 2</b> rolled a{' '}
							<b className='font-semibold'>7</b>
						</span>
					</div>
					<div className='w-full bg-white px-2'>
						<span>
							<b className='font-bold'>Player 3</b> rolled a{' '}
							<b className='font-semibold'>2</b>
						</span>
					</div>
					<div className='w-full bg-blue-300 px-2'>
						<span>
							<b className='font-bold'>Player 4</b> rolled a{' '}
							<b className='font-semibold'>10</b>
						</span>
					</div>
					<div className='w-full bg-red-300 px-2'>
						<span>
							<b className='font-bold'>Player 1</b> rolled a{' '}
							<b className='font-semibold'>5</b>
						</span>
					</div>
					<div className='w-full bg-orange-300 px-2'>
						<span>
							<b className='font-bold'>Player 2</b> rolled a{' '}
							<b className='font-semibold'>7</b>
						</span>
					</div>
					<div className='w-full bg-white px-2'>
						<span>
							<b className='font-bold'>Player 3</b> rolled a{' '}
							<b className='font-semibold'>2</b>
						</span>
					</div>
					<div className='w-full bg-blue-300 px-2'>
						<span>
							<b className='font-bold'>Player 4</b> rolled a{' '}
							<b className='font-semibold'>10</b>
						</span>
					</div>
					<div className='w-full bg-red-300 px-2'>
						<span>
							<b className='font-bold'>Player 1</b> rolled a{' '}
							<b className='font-semibold'>5</b>
						</span>
					</div>
					<div className='w-full bg-orange-300 px-2'>
						<span>
							<b className='font-bold'>Player 2</b> rolled a{' '}
							<b className='font-semibold'>7</b>
						</span>
					</div>
					<div className='w-full bg-white px-2'>
						<span>
							<b className='font-bold'>Player 3</b> rolled a{' '}
							<b className='font-semibold'>2</b>
						</span>
					</div>
					<div className='w-full bg-blue-300 px-2'>
						<span>
							<b className='font-bold'>Player 4</b> rolled a{' '}
							<b className='font-semibold'>10</b>
						</span>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardContent className='flex h-full items-center justify-center'>
					<div className='grid grid-cols-3 gap-2'>
						<Button variant='outline'>2</Button>
						<Button variant='outline'>3</Button>
						<Button variant='outline'>4</Button>
						<Button variant='outline'>5</Button>
						<Button variant='outline'>6</Button>
						<Button variant='outline'>7</Button>
						<Button variant='outline'>8</Button>
						<Button variant='outline'>9</Button>
						<Button variant='outline'>10</Button>
						<Button variant='outline'>11</Button>
						<Button variant='outline'>12</Button>
						<Button variant='outline'>Undo</Button>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardContent className='flex h-full flex-col justify-center gap-2'>
					<div className='flex items-center justify-center gap-1'>
						<div className='h-8 w-8 rounded-md  border-2 border-gray-500 bg-red-500' />
						<span className='text-lg'>Player 1</span>
					</div>
					<div className='flex items-center justify-center gap-1'>
						<div className='h-8 w-8 rounded-md border-2 border-gray-500 bg-orange-500' />
						<span className='text-lg'>Player 2</span>
					</div>
					<div className='flex items-center justify-center gap-1'>
						<div className='h-8 w-8 rounded-md border-2 border-gray-500 bg-white' />
						<span className='text-lg'>Player 3</span>
					</div>
					<div className='flex items-center justify-center gap-1'>
						<div className='h-8 w-8 rounded-md  border-2 border-gray-500 bg-blue-500' />
						<span className='text-lg'>Player 4</span>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default App;
