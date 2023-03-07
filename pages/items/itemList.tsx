import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
function ItemList() {
  const [Items, setItems] = useState<any>([]);
 function prepareItems() {
     axios.get(" http://localhost:5000/items").then((response) => {
      setItems(response.data);
      // console.log(response);
    });
  }
  useEffect(() => {
    prepareItems();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {Items.map((item) => (
        <div key={item?.id}>
          <Link href={`/items/${item?.id}`}>
            <img
              src={item?.image}
              alt={item?.name}
              className="w-[250px] h-[250px] object-cover"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
