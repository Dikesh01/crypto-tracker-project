import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../functions/get100Coins";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./style.css";

function SelectCoins({crypto1, crypto2, handleCoinChange}) {
  const [allCoins, setAllCoins] = useState([]);
  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

//   const handleCoinChange = (event, isCoin2)=>{

//     if(isCoin2){
//       console.log("crypto2>>>", event.target.value)
//       setCrypto2(event.target.value);
      
//     }else{
//       setCrypto1(event.target.value);
//       // console.log("crypto1>>>",event.target.value);
//     }  
// }

useEffect(()=>{
    getData();
},[])

async function getData(){
    const myCoin = await get100Coins()
    setAllCoins(myCoin);
}

  return (
    <div className="coin-flex">
      <p>Crypto 1</p>
      <Select
        sx={style}
        value={crypto1}
        label="crypto 1" 
        onChange={(event)=>handleCoinChange(event, false)}
      >
        {
        allCoins.filter((item)=>item.id != crypto2).map((coin, idx)=>(
            <MenuItem value={coin.id} key={idx}>{coin.name}</MenuItem>
        ))}  
      </Select>

      <p>Crypto 2</p>
      <Select
        sx={style}
        value={crypto2}
        label="crypto 2" 
        onChange={(event)=>handleCoinChange(event, true)}
      >
        {
        allCoins.filter((item)=>item.id != crypto1).map((coin, idx)=>(
            <MenuItem value={coin.id} key={idx}>{coin.name}</MenuItem>
        ))}  
      </Select>
    </div>
  );
}

export default SelectCoins;
