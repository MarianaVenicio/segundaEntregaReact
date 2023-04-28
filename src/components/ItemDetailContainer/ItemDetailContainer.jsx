import { UseParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const itemDetailContainer = () => {
  const { pid } = useParams();
  console.log(pid);

  return (
    <div>
      {pid}
      <ItemDetail 
     
      />
    </div>
  );
};






