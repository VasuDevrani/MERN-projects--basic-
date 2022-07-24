import React from "react";
import "./Footer.css";
import {
  Replay,
  Close,
  StarRate,
  Favorite,
  FlashOn,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function Footer() {
  return (
  <div className="footer">
        <IconButton className="btn-repeat btn">
            <Replay fontSize="large"/>
        </IconButton>
        <IconButton className="btn-left btn">
            <Close fontSize="large"/>
        </IconButton>
        <IconButton className="btn-star btn">
            <StarRate fontSize="large"/>
        </IconButton>
        <IconButton className="btn-right btn">
            <Favorite fontSize="large"/>
        </IconButton>
        <IconButton className="btn-light btn">
            <FlashOn fontSize="large"/>
        </IconButton>
  </div>);
}
