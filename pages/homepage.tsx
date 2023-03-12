import React from "react";
import Profile from "./profile";
import Contact from "./contact";
import ItemList from "./items/itemList";
// import Profile from "../Profile";
function Home() {
  return (
    <div>
      {/* nav bar */}
      <Profile />
      {/* Header */}
      <div className="mx-auto py-8 px-5 w-[calc(100%-350px)] max-w-[900px]  overflow-y-auto space-y-7">
        <Contact />
        <p></p>
        <ItemList />
      </div>
    </div>
  );
}
export default Home;
