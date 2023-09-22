import React, { useState } from "react";
import "./style.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function TogglePriceType({priceType, handlePriceTypeChange}) {

  return (
    <div className="toggle-prices">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "& .Mui-selected": {
            color: "var(--white) !important",
            backgroundColor: "#232c3d !important"
            
          },
          borderColor: "var(--white)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--white)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--white)",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">
          Price
        </ToggleButton>
        <ToggleButton value="total_volumes" clasaclassName="toggle-btn">
          Total Volume
        </ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">
          Market Cap
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
