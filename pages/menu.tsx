import { faBriefcase, faLaptopCode, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Contact from "./contact";
import Intro from "./intro";
function Menu() {
  return (
    <div className="h-screen w-[350px]">
      <div className="flex flex-col justify-around  w-full z-10 h-full border-r px-5 divide-y divide-slate-200 ">
        <Intro/>
        <div className="space-y-7 py-5 ">
        
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} />
            <p className="heading3">About Me</p>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLaptopCode} />
            <p className="heading3">Skills</p>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBriefcase} />
            <p className="heading3">Experiences</p>
          </div>
          <div className="flex items-center space-x-2 ">
            <FontAwesomeIcon icon={faUsers}  />
            <p className="heading3">Activities</p>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
}
export default Menu;
