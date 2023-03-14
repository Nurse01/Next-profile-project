import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import _ from "lodash";
function AboutMe() {
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
    <div className="space-y-20">
      <div className=" space-y-5">
        <p className="heading1">
          {profile?.fname} {profile?.lname}
        </p>
        <p className="max-w-[500px]">{profile?.introduction}</p>
        <div>
          <button className="btn-primary">View Resume</button>
        </div>
      </div>
      <div className="flex items-start justify-between ">
        {/* Education content */}
        <div>
          <p className="heading2 ">Education</p>
          <div>
            {_.map(profile.Education, (education) => (
              <div key={education?.id}>
                <div className="flex justify-between items-start mb-5 space-x-5">
                  <div>
                    <p className=" heading3">{education?.school}</p>
                    <p>{education?.major}</p>
                  </div>
                  <div className="font-semibold text-xs">
                    {education?.startyear} - {education?.endyear}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Hobby Content */}
        <div>
          <p className="heading2">Hobby</p>
          <div className="flex flex-wrap ">
            {_.map(profile.Hobby, (hobby) => (
              <div className="rounded-full border-2 border-blue w-max mr-[12px] mb-[12px] px-3">
                {hobby}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
