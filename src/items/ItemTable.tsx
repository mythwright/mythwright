import React, {Fragment, useState} from 'react';

import axios from 'axios';

type Item = {
  id: number;
  buy_price: number;

}

function ItemTable() {
  const [items, setItems] = useState([]);

  return <Fragment />;
}

export default ItemTable;
