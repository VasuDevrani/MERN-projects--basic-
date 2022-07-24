import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import logo from "./Tinder-Symbol.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>
      <img src={logo} alt="..." className="logoImg" />
      <IconButton>
        <ChatBubbleIcon fontSize="large" className="header-icon" />
      </IconButton>
    </div>
  );
}
