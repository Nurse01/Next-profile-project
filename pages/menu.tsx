import React from "react";
import Link from "next/link";
function Menu() {
  return (
    <div className=" w-full h-[50px]  border-b">
      <div className="h-full flex justify-end items-center gap-x-7 px-7">
        <Link href="/items">
          <div>Home</div>
        </Link>
        <div>Search</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
export default Menu;
