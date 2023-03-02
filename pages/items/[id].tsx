import { useRouter } from "next/router";
import Menu from "../menu";
const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="flex">
      <Menu />
      <div className="mx-auto py-8 px-5 w-[calc(100%-270px)] max-w-[800px] overflow-y-auto space-y-7">
        <h1>Item Detail</h1>
        <p>{id}</p>
      </div>
    </div>
  );
};
export default Detail;
