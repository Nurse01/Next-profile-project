import React from "react";
import Link from "next/link";
function ItemList() {
  const Items = [
    {
      id: 1,
      name: "Lipstick",
      price: 100,
      type: "cosmetics",
      image: "images/lipstick.jpg",
    },
    {
      id: 2,
      name: "Lipstick",
      price: 100,
      type: "cosmetics",
      image: "images/lipstick.jpg",
    },
    {
      id: 3,
      name: "Lipstick",
      price: 100,
      type: "cosmetics",
      image: "images/lipstick.jpg",
    },
    {
      id: 4,
      name: "Lipstick",
      price: 100,
      type: "cosmetics",
      image: "images/lipstick.jpg",
    },
    {
      id: 5,
      name: "Lipstick",
      price: 100,
      type: "cosmetics",
      image: "images/lipstick.jpg",
    },
  ];
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
