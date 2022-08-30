import { useEffect } from 'react';

import {
  getTotalMultichainBalance,
} from '../apis';

function App() {

  useEffect(() => {
    (async () => {
      const  total  = await getTotalMultichainBalance(
        "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
      );
      console.log({ total });
    })();
  }, []);

  return (
    <div className='p-10 flex flex-col items-center'>
      <h1 className='text-3xl font-bold'>Net Worth</h1>
    </div>
  );
}

export default App;
