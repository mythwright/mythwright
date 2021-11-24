import React from "react";
import { Outlet, ReactLocation, Router } from "react-location";

import NavBar from "./nav/NavBar";

const location = new ReactLocation();

function App() {
  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <div>Home</div> },
        { path: "/inventory", element: <div>Inventory</div> },
        { path: "/mappings", element: <div>Mappings</div> },
        { path: "/settings", element: <div>Settings</div> },
      ]}
    >
      <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white min-h-screen">
        <NavBar />
        <div className={"flex justify-center min-h-screen"}>
          <div className={"w-5/6 bg-gray-100 dark:bg-gray-600"}>
            <Outlet />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
