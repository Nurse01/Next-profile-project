import React, { useEffect, useState } from "react";
import axios from "axios";
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
    <div className="flex justify-center space-x-20 pb-4 border-b ">
      <img
        src="../images/profile.jpg"
        alt="profile"
        className="w-[150px] h-[150px] rounded-full object-cover mr-10"
      />
      <div className="space-y-5 max-w-[550px]">
        <p className="heading1 normal-case">
          {profile.fname} {profile.lname}
        </p>
        <div>
          <p >{profile.introduction}</p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
