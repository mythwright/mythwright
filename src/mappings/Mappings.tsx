import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';


interface CraftingMaterial {
  id: number,
  description?: string,
  name: string,
  type?: string
}

interface SalvageItem {
  id: number,
  name: string,
  lastUpdate: string
}

function camelToSpaces(s: string): string {
  const r = s.replace(/([A-Z])/g, " $1");
  return r.charAt(0).toUpperCase() + r.slice(1);
}

const aaaa = () => {

}

function Mappings() {
  const [materials, setMaterials] = useState<CraftingMaterial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [salvages, setSalvages] = useState<SalvageItem[]>([]);

  useEffect(() => {
    if (loading)
      axios.get<CraftingMaterial[]>('https://api.silveress.ie/gw2/v1/items/json?filter=type:CraftingMaterial&fields=id,name')
        .then(resp => {
          setMaterials(resp.data)
        })
        // .catch(err => console.log(err))
        .finally(() => setLoading(false))
  })

  useEffect(() => {
    if (salvages.length < 1) {
      axios.get('https://api.silveress.ie/gw2/v1/items/json?filter=description:Salvage Item').then(resp => {
        const salvs: SalvageItem[] = [];
        Object.keys(resp.data).forEach((v) => salvs.push(resp.data[v]))
        setSalvages(salvs);
      })
    }
  })

  return (
    <div>
      <div>
        <span>This is the list of keys: </span>
        <select name={"keys"} id={"table_keys"} className={"text-gray-600 w-96"}>
          {salvages.length > 1 ? salvages.map(k =>
            <option key={`${k.id}+${k.name}`} value={k.name}>{k.name}</option>
          ) : <option>Loading...</option>}
        </select>
      </div>
      <input type={"search"} id={"search"} name={"search"} value={search} onChange={(a) => {setSearch(a.target.value)}} />
      <select>
        {materials.length > 0 ? materials.filter(mat => mat["name"].toLowerCase().includes(search.toLowerCase())).map(m=> {
          return (
            <option key={m.id} value={m.name}>{m.name}</option>
          )
        }): null}
      </select>
    </div>
  );
}

export default Mappings;
