import React from "react";
import Link from "next/link";
import ItemsJSON from "db.json";

function ItemList() {
  const Items = ItemsJSON.items;
  console.log(Items);
  return (
    <div className="grid grid-cols-3 gap-4">
      {Items.map((item) => (
        <div key={item.id}>
          <Link href={`/items/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="w-[250px] h-[250px] object-cover"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
export default ItemList;
