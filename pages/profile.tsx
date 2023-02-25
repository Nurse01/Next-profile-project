import React from "react";

function Profile() {
  return (
    <div className="flex justify-center space-x-20 max-w-[800px] pb-4 border-b ">
      <img
        src="/images/profile.jpg"
        alt="profile"
        className="w-[150px] h-[150px] rounded-full object-cover mr-10"
      />
      <div className="space-y-5 w-[250px]">
        <p>nurse_wrty</p>
        <div className="flex justify-between space-x-2">
          <p className="font-semibold">
            1 <span className="text-xs">Posts</span>{" "}
          </p>
          <p>
            2 <span className="text-xs">Follower</span>{" "}
          </p>
          <p>
            3 <span className="text-xs">Following</span>{" "}
          </p>
        </div>
        <div>
          <p className="text-xs">Love to try and exploir new things</p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
