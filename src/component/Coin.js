import React from 'react';
const Coin = ({ name, price, symbol, rank, changePercent }) => {
    return (
        <div className="left">
            <h4> {"Rank: "+rank}</h4>
            <h4>{"Symbol: "+symbol}</h4>
            <h4> {"Name: "+name}</h4>
            <h4>{"Price: "+price+"$"}</h4><h4>{"Change percent 24HR"+changePercent}</h4>
        </div>
    )
}

export default Coin;