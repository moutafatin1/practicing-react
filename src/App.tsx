import { Button } from '@components';
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <main className='h-screen'>
      <div className='flex h-full flex-col items-center justify-center space-y-20'>
        <h1 className='text-7xl font-bold'>
          Counter : <span className='text-teal-500'>{counter}</span>
        </h1>
        <h2 className='text-3xl font-bold text-gray-500'>Hello World</h2>
        <button
          onClick={() => setCounter((count) => count + 1)}
          className='rounded-full bg-teal-500 px-6 py-3 font-bold text-slate-50 transition-all hover:bg-teal-600 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-95'
        >
          Increment
        </button>
        <Button />
      </div>
    </main>
  );
};

export default App;
