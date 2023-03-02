import React from "react";
import profileJSON from "db.json";
function Profile() {
  const profile = profileJSON.profile;
  return (
    <div className="flex justify-center space-x-20 max-w-[800px] pb-4 border-b ">
      <img
        src={profile.image}
        alt="profile"
        className="w-[150px] h-[150px] rounded-full object-cover mr-10"
      />
      <div className="space-y-5 w-[250px]">
        <p>{profile.username}</p>
        <div className="flex justify-between space-x-2">
          <p>
            <span className="font-semibold">1 </span>
            <span className="text-xs">Posts</span>
          </p>
          <p>
            <span className="font-semibold">2 </span>
            <span className="text-xs">Follower</span>
          </p>
          <p>
            <span className="font-semibold">3 </span>
            <span className="text-xs">Following</span>
          </p>
        </div>
        <div>
          <p className="text-xs">{profile.introduction}</p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
