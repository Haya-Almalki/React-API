import './App.css';
import Coins from './component/Coins';
import { useEffect, useState } from 'react';

function App() {

  const [coin, setCoin] = useState([])

  useEffect(() => {
    const fetchCoinData = async () => {
      const request = await fetch('https://api.coincap.io/v2/assets');
      const info = await request.json();

      setCoin(info.data.slice(0, 10));

    };
    fetchCoinData();
  }, []);

  
  return (
    <div className="App">
      <h1 className="display-4 mt-3 mb-4 ">Cryptocurrency</h1>
      <div className='row d-flex justify-content-center align-items-center container'>
        {coin.map((coinObj) => (
          <Coins name={coinObj.name} price={coinObj.priceUsd} symbol={coinObj.symbol.toLowerCase()} />
        )
        )}
      </div>
    </div>
  );
}

export default App;
