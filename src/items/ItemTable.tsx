import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

type Item = {
  id: number;
  buy_price: number;
  buy_quantity: number;
  lastUpdate: string;
  name: string;
  sell_price: number;
  sell_quantity: number;
};

function ItemTable() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading)
      axios
        .get<Item[]>("https://api.datawars2.ie/gw2/v1/items/json")
        .then((resp) => {
          setItems(resp.data.slice(0, 10));
        })
        // .catch(err => console.log(err))
        .finally(() => setLoading(false));
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Buy Price</th>
            <th>Buy Quantity</th>
            <th>Sell Price</th>
            <th>Sell Quantity</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => {
            return (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.buy_price}</td>
                <td>{i.buy_quantity}</td>
                <td>{i.sell_price}</td>
                <td>{i.sell_quantity}</td>
                <td>{i.lastUpdate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ItemTable;
