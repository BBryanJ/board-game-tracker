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
    <div className='grid gap-2 grid-cols-1 md:grid-cols-[75%_25%] grid-rows-3 h-screen'>
      <Card className='order-1 row-span-3'>
        <CardContent className='w-full h-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={sampleData}>
              <XAxis dataKey='name' />
              <YAxis />
              <Bar dataKey='count' fill='#8884d8' />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className='overflow-y-auto order-3 md:order-2'>
        <CardContent className='flex flex-col py-1'>
          <div className='px-2 w-full bg-red-300'>
            <span>
              <b className='font-bold'>Player 1</b> rolled a{' '}
              <b className='font-semibold'>5</b>
            </span>
          </div>
          <div className='px-2 w-full bg-orange-300'>
            <span>
              <b className='font-bold'>Player 2</b> rolled a{' '}
              <b className='font-semibold'>7</b>
            </span>
          </div>
          <div className='px-2 w-full bg-white'>
            <span>
              <b className='font-bold'>Player 3</b> rolled a{' '}
              <b className='font-semibold'>2</b>
            </span>
          </div>
          <div className='px-2 w-full bg-blue-300'>
            <span>
              <b className='font-bold'>Player 4</b> rolled a{' '}
              <b className='font-semibold'>10</b>
            </span>
          </div>
          <div className='px-2 w-full bg-red-300'>
            <span>
              <b className='font-bold'>Player 1</b> rolled a{' '}
              <b className='font-semibold'>5</b>
            </span>
          </div>
          <div className='px-2 w-full bg-orange-300'>
            <span>
              <b className='font-bold'>Player 2</b> rolled a{' '}
              <b className='font-semibold'>7</b>
            </span>
          </div>
          <div className='px-2 w-full bg-white'>
            <span>
              <b className='font-bold'>Player 3</b> rolled a{' '}
              <b className='font-semibold'>2</b>
            </span>
          </div>
          <div className='px-2 w-full bg-blue-300'>
            <span>
              <b className='font-bold'>Player 4</b> rolled a{' '}
              <b className='font-semibold'>10</b>
            </span>
          </div>
          <div className='px-2 w-full bg-red-300'>
            <span>
              <b className='font-bold'>Player 1</b> rolled a{' '}
              <b className='font-semibold'>5</b>
            </span>
          </div>
          <div className='px-2 w-full bg-orange-300'>
            <span>
              <b className='font-bold'>Player 2</b> rolled a{' '}
              <b className='font-semibold'>7</b>
            </span>
          </div>
          <div className='px-2 w-full bg-white'>
            <span>
              <b className='font-bold'>Player 3</b> rolled a{' '}
              <b className='font-semibold'>2</b>
            </span>
          </div>
          <div className='px-2 w-full bg-blue-300'>
            <span>
              <b className='font-bold'>Player 4</b> rolled a{' '}
              <b className='font-semibold'>10</b>
            </span>
          </div>
        </CardContent>
      </Card>
      <Card className='order-2 md:order-3'>
        <CardContent className='flex justify-center items-center h-full'>
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
      <Card className='order-4'>
        <CardContent className='flex flex-col gap-2 justify-center h-full'>
          <div className='flex gap-1 justify-center items-center'>
            <div className='w-8 h-8 bg-red-500 rounded-md border-2 border-gray-500' />
            <span className='text-lg'>Player 1</span>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <div className='w-8 h-8 bg-orange-500 rounded-md border-2 border-gray-500' />
            <span className='text-lg'>Player 2</span>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <div className='w-8 h-8 bg-white rounded-md border-2 border-gray-500' />
            <span className='text-lg'>Player 3</span>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <div className='w-8 h-8 bg-blue-500 rounded-md border-2 border-gray-500' />
            <span className='text-lg'>Player 4</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
