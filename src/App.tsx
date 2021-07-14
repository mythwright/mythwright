import React, {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios';

import ItemTable from './items/ItemTable';

interface SalvageItem {
  id: number,
  name: string,
  lastUpdate: string
}

function App() {
  // Create the count state.
  const [keys, setKeys] = useState<string[]>([]);
  const [salvages, setSalvages] = useState<SalvageItem[]>([]);
  // Return the App component.

  useEffect(() => {
    if (keys.length < 1) {
      axios.get('https://api.silveress.ie/gw2/v1/items/keys').then(resp => {
        const keys: string[] = [];
        Object.keys(resp.data).forEach((v) => keys.push(resp.data[v]))
        setKeys(keys);
      })
    }

    if (salvages.length < 1) {
      axios.get('https://api.silveress.ie/gw2/v1/items/json?filter=description:Salvage Item').then(resp => {
        const salvs: SalvageItem[] = [];
        Object.keys(resp.data).forEach((v) => salvs.push(resp.data[v]))
        setSalvages(salvs);
      })
    }
  })

  return (
    <div className="App">
      <header className="App-header text-white">
        <div>
          <span>This is the list of keys: </span>
          <select name={"keys"} id={"table_keys"} className={"text-gray-600 w-96"}>
            {salvages.length > 1 ? salvages.map(k =>
              <option key={`${k.id}+${k.name}`} value={k.name}>{k.name}</option>
            ) : <option>Loading...</option>}
          </select>
        </div>
      </header>
      <section>
      </section>
    </div>
  );
}

export default App;
