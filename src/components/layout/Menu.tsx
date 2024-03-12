"use client";
import React from "react";
import {
  Menu,
  MenuItem,
  MenuButton,
  MenuDivider,
  MenuHeader,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const MenuComp = () => {
  return (
    <Menu menuButton={<MenuButton>Bot</MenuButton>}>
      <MenuItem href="/#features">Features</MenuItem>
      <MenuItem href="/#partnerships">Partnerships</MenuItem>
    </Menu>
  );
};

export default MenuComp;
