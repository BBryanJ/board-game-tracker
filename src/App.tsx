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
        <CardContent>
          <p className='text-2xl'>Players</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
