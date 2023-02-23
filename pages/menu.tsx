import React from "react";
function Menu(name:string) {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <p className="heading1">{name}</p>
    </div>
  );
}
export default Menu;