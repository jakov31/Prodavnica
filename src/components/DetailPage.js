import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Kontext from "../store/context";
import Button from "../UI/Button";
import stil from "./DetailPage.module.css";

const DetailPage = () => {
  const { id } = useParams();
  const ctx = useContext(Kontext);
  const navigate = useNavigate();

  const DetailItem = ctx.items.filter(
    (item) => item.id.toString() === id.toString()
  );

  return (
    <div className={stil.detail}>
      {DetailItem.map((item) => (
        <div key={item.id}>
          <div className={stil.imgkont}>
            <img src={item.images[0]} alt="slika" />
          </div>
          <div className={stil.stil}>
            <h4>Naziv:</h4>
            <p>{item.title}</p>
          </div>
          <div className={stil.stil}>
            <h4>Brend:</h4>
            <p>{item.brand}</p>
          </div>
          <div className={stil.stil}>
            <h4>Kategorija:</h4>
            <p>{item.category} </p>
          </div>
          <div className={stil.stil}>
            <h4>Opis:</h4>
            <p>{item.description} </p>
          </div>
          <div className={stil.stil}>
            <h4>Popust:</h4>
            <p>{item.discountPercentage} </p>
          </div>
          <div className={stil.stil}>
            <h4>Rejting:</h4>
            <p>{item.rating} </p>
          </div>
          <div className={stil.stil}>
            <h4>Zalihe:</h4>
            <p>{item.stock} </p>
          </div>
          <div className={stil.stil}>
            <h4>Cijena:</h4>
            <p>{item.price}€</p>
          </div>
        </div>
      ))}
      <Button
       className={stil.details}
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </Button>
    </div>
  );
};

export default DetailPage;
