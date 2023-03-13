import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Profile() {
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
    // <div className="flex justify-center space-x-20 pb-4 border-b ">
    //   <img
    //     src="../images/profile.jpg"
    //     alt="profile"
    //     className="w-[150px] h-[150px] rounded-full object-cover mr-10"
    //   />
    //   <div className="space-y-5 max-w-[550px]">
    //     <p className="heading1 normal-case">
    //       {profile.fname} {profile.lname}
    //     </p>
    //     <div>
    //       <p >{profile.introduction}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="space-y-7 py-5">
      <p className="heading2">Contact</p>
      <div className="flex items-center space-x-2 font-bold">
        <FontAwesomeIcon icon={faPhone} /> <p>{profile.tel}</p>
      </div>
      <div className="flex items-center space-x-2 font-bold">
        <FontAwesomeIcon icon={faEnvelope} />
        <p>{profile.email}</p>
      </div>
      <div className="flex items-center space-x-2 font-bold">
        <FontAwesomeIcon icon={faGithub} />
        <Link href="https://github.com/Nurse01" target="_blank">
          {profile.github}
        </Link>
      </div>
      <div className="flex items-center space-x-2 font-bold">
        <FontAwesomeIcon icon={faLinkedin} />
        <Link
          href="https://www.linkedin.com/in/warathaya-rattachai-6529b3219/"
          target="_blank"
        >
          {profile.linkedin}
        </Link>
      </div>
    </div>
  );
}
export default Profile;
