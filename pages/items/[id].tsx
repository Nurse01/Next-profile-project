import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Menu from "../menu";
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
      <Menu />
      {/* Content */}
      <div className="mx-auto py-8 px-5 w-[calc(100%-270px)] max-w-[800px] overflow-y-auto space-y-7">
        <div className="flex justify-center">
          <img src={item?.image} alt={item?.name} className="w-[350px] h-[350px]" />
          <div>
            <p className="heading1">{item?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
