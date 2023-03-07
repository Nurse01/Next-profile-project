import React from "react";
import Menu from "./menu";
import Profile from "./profile";
import ItemList from "./items/itemList";
// import Menu from "../menu";
function Items() {
  return (
    <div>
      <div>
        {/* nav bar */}
        <Menu />
        {/* Header */}

        <Profile />
        <ItemList />
      </div>
    </div>
  );
}
export default Items;
