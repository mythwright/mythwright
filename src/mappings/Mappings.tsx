import React, { useState } from "react";
import axios, {AxiosResponse} from "axios";
import {Route, useMatch} from "react-location";

interface SalvageItem {
  id: number;
  name: string;
  lastUpdate: string;
}

export function Mappings() {
  const [search, setSearch] = useState<string>("");

  const { data } = useMatch();
  const salvages = (data as MappingsData).mappings.data as SalvageItem[];

  return (
    <div>
      <div>
        <span>This is the list of keys: </span>
        <select
          name={"keys"}
          id={"table_keys"}
          className={"text-gray-600 w-96"}
        >
          {salvages.map((k) => (
            <option key={`${k.id}+${k.name}`} value={k.name}>
              {k.name}
            </option>
          ))}
        </select>
      </div>
      <input
        type={"search"}
        id={"search"}
        name={"search"}
        value={search}
        onChange={(a) => {
          setSearch(a.target.value);
        }}
      />
    </div>
  );
}

type MappingsData = {
  mappings: AxiosResponse
}

async function mappingsLoader() : Promise<MappingsData> {
  return {
    mappings: await axios.get("https://api.silveress.ie/gw2/v1/items/json?filter=description:Salvage Item")
  }
}

export var mappingRoute : Route = {
  path: "/mappings",
  loader: mappingsLoader,
  loaderMaxAge: 10000,
  element: <Mappings />,
  pendingElement: async () => <div>Loading up Silver's API</div>,
  pendingMs: 50
}

export default mappingRoute;
