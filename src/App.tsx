import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

function App() {
  return (
    <div className='grid gap-2 grid-cols-2 h-screen'>
      <Card className='row-span-3'>
        <CardContent>
          <p className='text-2xl'>Graph</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <p className='text-2xl'>History</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className='h-full flex justify-center items-center'>
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
        <CardContent className='flex flex-col gap-2 justify-center h-full'>
          <div className='flex gap-1 justify-center items-center'>
            <div className='w-8 h-8 bg-red-500  border-gray-500 border-2 rounded-md' />
            <span className='text-lg'>Player 1</span>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <div className='w-8 h-8 bg-orange-500 border-gray-500 border-2 rounded-md' />
            <span className='text-lg'>Player 2</span>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <div className='w-8 h-8 bg-white border-gray-500 border-2 rounded-md' />
            <span className='text-lg'>Player 3</span>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <div className='w-8 h-8 bg-blue-500  border-gray-500 border-2 rounded-md' />
            <span className='text-lg'>Player 4</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
