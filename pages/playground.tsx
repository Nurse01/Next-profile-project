import React, { useState } from "react";
import Link from "next/link";
function Homepage() {
  // const PIGSNOUT = "pigsnout";
  // const [password, setPassword] = useState("");
  // const [Type, setType] = useState("");

  // function checkPassword() {
  //   if (password === PIGSNOUT) {
  //     setType("wizard");
  //   } else {
  //     setType("muggle");
  //   }
  // }
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex justify-between items-center space-x-5">
        <div className="flex flex-col space-y-3">
          <p className="heading1">Welcome to my review</p>
          <Link href="/items" className="btn-primary w-full">
            read more
          </Link>
          {/* <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="psw"
          />
          <button onClick={checkPassword} className="btn-primary">
            Sumbit
          </button>
          {Type === "wizard" && (
            <div>
              <p className="text-center">Hello wizard </p>{" "}
              <Link href="/items" className="btn-primary w-full">
                read more
              </Link>
            </div>
          )}
          {Type === "muggle" && <p className="text-center">Filthy Little Mudblood!<br/> Your password is {PIGSNOUT}</p>} */}
        </div>
      </div>
    </div>
  );
}
export default Homepage;
