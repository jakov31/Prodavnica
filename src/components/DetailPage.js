import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Kontext from "../store/context";

const DetailPage = () => {
  const { id } = useParams();
  const ctx = useContext(Kontext);
  const navigate = useNavigate();

  const DetailItem = ctx.items.filter(
    (item) => item.id.toString() === id.toString()
  );

  return (
    <div>
      {DetailItem.map((item) => (
        <div>
          <p>{item.price}</p>
          <p>{item.title}</p>
          <p>{item.brand}</p>
          <p>{item.category} </p>
          <p>{item.description} </p>
          <p>{item.discountPercentage} </p>
          <p>{item.price} </p>
          <p>{item.rating} </p>
          <p>{item.stock} </p>
        </div>
      ))}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default DetailPage;
