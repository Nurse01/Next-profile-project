import React, { useRef } from "react";
import Profile from "./profile";
import Contact from "./contact";
import ItemList from "./items/itemList";
import Menu from "./menu";
// import Profile from "../Profile";
function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex">
      {/* nav bar */}
      {/* <Profile /> */}
      <Menu/>
      {/* Header */}
      <div
        className=" py-8 px-5 h-screen w-[calc(100vw-350px)] overflow-y-auto space-y-7"
        ref={containerRef}
      >
        <div className="mx-auto max-w-[900px]">
          {/* <Contact /> */}
          <div className="flex justify-around">
            <button
              onClick={() => {
                console.log(containerRef.current);
                containerRef.current.scroll({ top: 500, behavior: "smooth" });
              }}
            >
              Skill
            </button>
            <button
              onClick={() => {
                console.log(containerRef.current);
                containerRef.current.scroll({ top: 700, behavior: "smooth" });
              }}
            >
              Experience
            </button>
            <button
              onClick={() => {
                console.log(containerRef.current);
                containerRef.current.scroll({ top: 500, behavior: "smooth" });
              }}
            >
              Activity
            </button>
          </div>
          <ItemList />
        </div>
      </div>
    </div>
  );
}
export default Home;
