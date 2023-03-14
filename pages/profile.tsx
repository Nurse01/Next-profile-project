import React, { useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Menu() {
  const [profile, setProfile] = useState<any>([]);
  function prepareProfile() {
    axios.get(" http://localhost:5000/profile").then((response) => {
      setProfile(response.data);
      console.log(response);
    });
  }
  useEffect(() => {
    prepareProfile();
  }, []);
  return (
    // <div className=" w-full h-[50px]  border-b">
    //   <div className="h-full flex justify-end items-center gap-x-7 px-7">
    <div className="h-screen w-[350px]">
      <div className="w-full z-10 h-full border-r px-5 py-8 ">
        <div className="flex flex-col space-y-28 ">
          {/* Education content */}
          <div className="space-y-6">
            <p className="heading2 ">Education</p>
            {_.map(profile.Education, (education) => (
              <div key={education?.id}>
                <div className="flex justify-between items-start  mb-5">
                  <div>
                    <p className="w-[200px] heading3">{education?.school}</p>
                    <p>{education?.major}</p>
                  </div>
                  <div className="font-semibold text-xs">
                    {education?.startyear} - {education?.endyear}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Hobby Content */}
          <div className="space-y-6">
            <p className="heading2">Hobby</p>
            <div className="flex flex-wrap ">
              {_.map(profile.Hobby, (hobby) => (
                <div className="rounded-full border-2 border-blue w-max mr-[12px] mb-[12px] px-3">
                  {hobby}
                </div>
              ))}
            </div>
          </div>
          {/* Contact Content */}
          <div className="space-y-6">
            <p className="heading2">Contact</p>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} /> <p>{profile.tel}</p>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>{profile.email}</p>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faGithub} />
              <Link href="https://github.com/Nurse01" target="_blank">
                {profile.github}
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faLinkedin} />
              <Link
                href="https://www.linkedin.com/in/warathaya-rattachai-6529b3219/"
                target="_blank"
              >
                {profile.linkedin}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
