import React from "react";
import { BotIcon } from "./botIcon";
import classes from "./header.module.css";

export const Header = () => {
  return (
    <header
      style={{ display: "flex", alignItems: "center" }}
      className={classes.header}
    >
      <div
        style={{
          width: "82px",
          border: "1px white transparent",
          borderRadius: "100%",
          backgroundColor: "white",
        }}
      >
        <BotIcon size="80px" adjustment="0px" />
      </div>
      <h2 style={{ marginLeft: "10px" }}>Suki's Chat-Bot</h2>
    </header>
  );
};
