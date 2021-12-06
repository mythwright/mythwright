import React from "react";
import {Outlet, ReactLocation, Router} from "react-location";

import NavBar from "./nav/NavBar";
import {mappingsLoader, Mappings} from "./mappings/Mappings";

const location = new ReactLocation();

function App() {
  return (
    <Router
      location={location}
      routes={[
        {path: "/", element: <div>Home</div>},
        {path: "/inventory", element: <div>Inventory</div>},
        {
          path: "/mappings",
          loader: mappingsLoader,
          element: <Mappings />
        },
        {path: "/settings", element: <div>Settings</div>},
      ]}
    >
      <div className="text-black dark:text-white min-h-screen">
        <NavBar/>
        <div className={"min-h-screen bg-reliquary-bridge bg-cover"}>
          <div className={"flex justify-center min-h-screen backdrop-filter backdrop-blur"}>
            <div className={"w-5/6 bg-gray-100 dark:bg-gray-600 p-1 shadow"}>
              <Outlet/>
            </div>
          </div>
        </div>
        {/*bg-gray-200 dark:bg-gray-700*/}
      </div>
    </Router>
  );
}

export default App;
