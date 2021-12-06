import React, { Fragment, useEffect, useState } from "react";
import axios, {AxiosPromise} from "axios";
import {DefaultGenerics, LoaderFn, Route, useMatch} from "react-location";

interface CraftingMaterial {
  id: number;
  description?: string;
  name: string;
  type?: string;
}

interface SalvageItem {
  id: number;
  name: string;
  lastUpdate: string;
}

function camelToSpaces(s: string): string {
  const r = s.replace(/([A-Z])/g, " $1");
  return r.charAt(0).toUpperCase() + r.slice(1);
}

const aaaa = () => {};

export function Mappings() {
  const [search, setSearch] = useState<string>("");
  const [salvages, setSalvages] = useState<SalvageItem[]>([]);

  const { data: { mappings }} = useMatch();

  return (
    <div>
      <div>
        <span>This is the list of keys: </span>
        <select
          name={"keys"}
          id={"table_keys"}
          className={"text-gray-600 w-96"}
        >
          {salvages.length > 1 ? (
            salvages.map((k) => (
              <option key={`${k.id}+${k.name}`} value={k.name}>
                {k.name}
              </option>
            ))
          ) : (
            <option>Loading...</option>
          )}
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

export async function mappingsLoader() : Promise<any> {
  return {
    mappings: await axios.get("https://api.silveress.ie/gw2/v1/items/json?filter=description:Salvage Item")
  }
}


export default Mappings;
