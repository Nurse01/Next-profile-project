import React from "react";

function Menu() {
  return (
    <div className="h-screen w-[270px]">
      <div className="w-full z-10 h-full border-r px-5 py-8 ">
        <div className="flex flex-col gap-y-7 ">
          <div>Home</div>
          <div>Search</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
