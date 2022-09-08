import React from 'react';
const Coins = ({ name, price, symbol }) => {
    

    return (
        <div className="col-lg-3 col-md-6 col-xs-1">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <img  alt={symbol} src={"https://assets.coincap.io/assets/icons/"+symbol+"@2x.png" } height="40px" width="40px" />
                    </div>
                    <div className="card-body h-50 w">
                        <p> Name:<br></br> {name}</p>
                        <p>price:<br></br>{price} $</p>
                    </div>
            </div>
        </div>
    )
}

export default Coins;