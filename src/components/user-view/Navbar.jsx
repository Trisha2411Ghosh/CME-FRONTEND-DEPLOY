import React, { useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link to="/u/home">
          <MenuItem setActive={setActive} active={active} item="Home">

          </MenuItem>
        </Link>
        <Link to="/u/dashboard">
          <MenuItem setActive={setActive} active={active} item="Dashboard">
          
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
