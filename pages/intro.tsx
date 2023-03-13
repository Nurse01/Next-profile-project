import axios from "axios";
import React, { useEffect, useState } from "react";
function Intro() {
  const [profile, setProfile] = useState<any>([]);
  let [lnameLetter, setLnameLetter] = useState<any>([]);
  function prepareProfile() {
    axios.get(" http://localhost:5000/profile").then((response) => {
      setProfile(response.data);
      setLnameLetter(response.data.lname.charAt(0));
      console.log(response);
    });
  }
  useEffect(() => {
    prepareProfile();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <p className="text-center text-xl font-semibold">
        {profile.fname} {lnameLetter}.
      </p>
      <img
        src="../images/profile.jpg"
        className="w-[150px] h-[150px] rounded-full object-cover "
      />
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo ducimus ipsam rerum fugit</p>
    </div>
  );
}
export default Intro;
