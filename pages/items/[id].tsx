import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Item Detail</h1>
      <p>{id}</p>
    </div>
  );
};
export default Detail;
