import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Menu from "../menu";
import itemsJSON from "db.json";

function Detail() {
  const router = useRouter();
  const [id, setId] = useState<string>('');
  const [item, setItem] = useState<any>(null);
  useEffect(() => {
    console.log("mounted" + router.query?.id);
    
    if (router.query?.id) {
      setId(router.query?.id?.toString())
      setItem(itemsJSON.items.find((item) => item.id === parseInt(id)));
      console.log("mounted" + id);
    }
  }, []);
  // const item = itemsJSON.items.find((item) => item.id === id);

  return (
    <div className="flex">
      <Menu />
      <div className="mx-auto py-8 px-5 w-[calc(100%-270px)] max-w-[800px] overflow-y-auto space-y-7">
        <p className="heading1">{item?.name}</p>
      </div>
    </div>
  );
}

export default Detail;
