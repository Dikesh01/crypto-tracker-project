import React, { useState } from "react";
import "./style.css";

function CoinInfo({ heading, desc }) {

    const shortDesc = desc.slice(0, 350) + "<p style='color:var(--grey)'> Read more...</p>";
    const longDesc = desc + "<p style='color:var(--grey)'> Read less...</p>";

    const [flag, setFlag] = useState(true)
  return (
    <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 350 ?
        <p 
      onClick={()=>setFlag(!flag)}
      className="coin-info-desc" dangerouslySetInnerHTML={{__html: flag? shortDesc : longDesc }} />
    : <p className="coin-info-desc" dangerouslySetInnerHTML={{__html: desc }} />
    }
    </div>
  );
}

export default CoinInfo;
