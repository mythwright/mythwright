import React, {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios';

import ItemTable from './items/ItemTable';

function App() {
  // Create the count state.
  const [keys, setKeys] = useState<string[]>([]);
  // Return the App component.

  useEffect(() => {
    if (keys.length > 0) return;
    axios.get('https://api.silveress.ie/gw2/v1/items/keys').then(resp => {
      const keys: string[] = [];
      Object.keys(resp.data).forEach((v) => keys.push(resp.data[v]))
      setKeys(keys);
    })
  })

  return (
    <div className="App">
      <header className="App-header text-white">
        <div>
          <span>This is the list of keys: </span>
          <select name={"keys"} id={"table_keys"} className={"text-gray-600 w-96"}>
            {keys.length > 1 ? keys.sort().map(k =>
              <option key={k} value={k}>{k}</option>
            ) : <option>Loading...</option>}
          </select>
        </div>
      </header>
      <section>
        <ItemTable />
      </section>
    </div>
  );
}

export default App;
