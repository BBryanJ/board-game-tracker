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
        <CardContent>
          <p className='text-2xl'>Input</p>
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
