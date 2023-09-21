import React from 'react'
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';


function List({coin}) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
        <Tooltip title="Coin Logo" placement="bottom">
            <td className="td-image">
                <img src={coin.image} alt={coin.id} className="coin-logo" />
            </td>
        </Tooltip>
        <Tooltip title="Coin-Info" placement="bottom-start">
            <td>
                <div className="name-col">
                <p className="coin-symbol">{coin.symbol}</p>
                <p className="coin-name">{coin.name}</p>
                </div>
            </td>
        </Tooltip>
        
    <Tooltip title="Coin-Info" placement="bottom">
      {coin.price_change_percentage_24h > 0 ? (
        <td className="chip-flex">
          <div className="price-chip">
            +{coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip td-icon">
            <TrendingUpRoundedIcon />
          </div>
        </td>
      ) : (
        <td className="chip-flex">
          <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip chip-red td-icon">
            <TrendingDownRoundedIcon />
          </div>
        </td>
      )}
    </Tooltip>

    <Tooltip title="Current Price" placement="bottom">
      <td>
        <h3
          className="coin-price td-center-align"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        </td>
    </Tooltip>
    <Tooltip title="Current Price" placement="bottom">
        <td>
            <p className="total_volume td-right-align td-total-volume">
                ${coin.total_volume.toLocaleString()}</p>
        </td>
    </Tooltip>
    <Tooltip title="Market Cap" placement="bottom">
        <td className='desktop-td-mkt'>
            <p className="total_volume td-right-align">
                ${coin.market_cap.toLocaleString()}</p>
        </td>
    </Tooltip>
    <Tooltip title="Market Cap" placement="bottom">
        <td className='mobile-td-mkt'>
            <p className="total_volume td-right-align">
                ${convertNumber(coin.market_cap)}</p>
        </td>
    </Tooltip>
    </tr>
    </Link>
  )
}
export default List;