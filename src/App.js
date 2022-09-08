import './App.css';
import Coins from './component/Coins';
import Coin from './component/Coin';

import { useEffect, useState } from 'react';

function App() {

  const [coins, setCoins] = useState([])
  const [coinName, setCoinName] = useState('')
  const [name, setName] = useState('')
  const [rank, setRank] = useState('')
  const [symbol, setSymbol] = useState('')
  const [priceUsd, setPriceUsd] = useState('')
  const [changePercent, setChangePercent] = useState('')

  useEffect(() => {
    const fetchCoinData = async () => {
      const request = await fetch('https://api.coincap.io/v2/assets');
      const info = await request.json();
      setCoins(info.data.slice(0, 10));
    };
    fetchCoinData();
  }, []);

  const onClick = async () => {
    const request = await fetch(
      'https://api.coincap.io/v2/assets/' + coinName
    );
    const info = await request.json();
    setName(info.data.name)
    setChangePercent(info.data.changePercent24Hr)
    setRank(info.data.rank)
    setSymbol(info.data.symbol)
    setPriceUsd(info.data.priceUsd)
    console.log(info.data.name)
  };

  return (
    <div className="App">
      <h1 className="display-4 mt-3 mb-4 ">Most Popular Cryptocurrency</h1>
      <div className='row d-flex justify-content-center align-items-center container'>
        {coins.map((coinObj) => (
          <Coins name={coinObj.name} price={coinObj.priceUsd} symbol={coinObj.symbol.toLowerCase()} />
        )
        )}
      </div><hr></hr>
      <h3 className="display-4 mt-3 mb-4 ">Search by coin name:</h3>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter coin name" value={coinName} onChange={(name) => setCoinName(name.target.value)} />
        <div className="input-group-append">
          <button class="btn btn-outline-secondary" onClick={onClick} type="button">Search</button>
        </div>
      </div>
      <div>
        <Coin name={name} price={priceUsd}
          symbol={symbol} rank={rank} changePercent={changePercent}/>
      </div>
    </div>
  );
}
export default App;
