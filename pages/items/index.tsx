import React from "react";
import Menu from "../menu";
import Profile from "../profile";
import ItemList from "./itemList";
// import Menu from "../menu";
function Items() {
  return (
    <div>
      <div className="flex ">
        {/* Side nav bar */}
        <Menu />
        {/* Header */}
        <div className="mx-auto py-8 px-5 w-[calc(100%-270px)] max-w-[800px] overflow-y-auto space-y-7">
          <Profile />
          <ItemList />
        </div>
      </div>
    </div>
  );
}
export default Items;
