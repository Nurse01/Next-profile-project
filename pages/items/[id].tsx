import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Contact from "../contact";
import axios from "axios";
function Detail() {
  const router = useRouter();
  const [item, setItem] = useState<any>(null);
  function prepareItem(id) {
    axios.get(`http://localhost:5000/items/${id}`).then((response) => {
      setItem(response.data);
      console.log(response);
    });
  }
  useEffect(() => {
    if (router.query.id) {
      prepareItem(router.query.id);
    } else {
      router.push("/");
    }
  }, []);
  return (
    <div>
      <Contact />
      {/* Content */}
      <div className="mx-auto py-7 px-5 ">
        <div className="flex justify-center">
          <img src={item?.image} alt={item?.name} className="w-[400px] h-[400px] mx-10" />
          <div className="text-start">
            <p className="heading1">{item?.name}</p>
            <p className="heading2">Price :{item?.price}</p>
            <p className="heading2">Description :{item?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
