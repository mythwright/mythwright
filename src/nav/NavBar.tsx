import React from 'react';

import SvgRef from '../icons/droplet.svgr.svg';

function NavBar() {
  return (
    <nav className={"fixed h-16 w-full bg-gray-500 text-white shadow"}>
      <div className="container flex">
        <div className={"m-4 mr-10 flex"}><SvgRef className={"mr-2"} /> DropLake</div>
        <div className={"m-4"}>Dashboard</div>
        <div className={"m-4"}>Drop Inputs</div>
        <div className={"m-4"}>Mappings</div>
      </div>
    </nav>
  );
}

export default NavBar;
