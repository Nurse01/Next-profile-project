import React, { useRef } from "react";
import Profile from "./profile";
import Contact from "./contact";
import ItemList from "./items/itemList";
import Menu from "./menu";
import AboutMe from "./aboutme";
import ContentLayout from "./layouts/content";
// import Profile from "../Profile";
function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Menu />
      {/* Header */}
      <ContentLayout>
        <AboutMe />
      </ContentLayout>
      {/* <div
        className="py-12 px-10 h-screen w-[calc(100vw-350px)] overflow-y-auto space-y-7"
        ref={containerRef}
      >
      </div> */}
    </div>
  );
}
export default Home;
