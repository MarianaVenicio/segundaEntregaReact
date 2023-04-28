import { useParams } from "react-router-dom";
import App from "../../App";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const itemDetailContainer = () => {
  const { pid } = useParams();
  console.log(pid);

  return (
    <div>
      {pid}
      <ItemDetail />
    </div>
  );
};
