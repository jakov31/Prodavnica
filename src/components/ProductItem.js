import { useContext } from "react";
import { Link } from "react-router-dom";
import Kontext from "../store/context";
import Button from "../UI/Button";

import stil from "./ProductItem.module.css";

const ProductItem = (props) => {
  const ctx = useContext(Kontext);

  const deleteProduct = () => {
    if (props.item.id < 101) {
      fetch(`https://dummyjson.com/products/${props.item.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => ctx.removeItem(data.id));
    } else {
      ctx.removeItem(props.item.id);
    }
  };

  let slika;
  if (props.item.images) {
    slika = props.item.images[0];
  } else {
    slika = "";
  }

  return (
    <li className={stil.lista}>
      <div className={stil.info}>
        <img className={stil.slika} src={slika} alt="slika" />
        <div className={stil.opis}>
          <h2>{props.item.title}</h2>
          <p>{props.item.price}€</p>
        </div>
      </div>
      <div className={stil.dugmad}>
        <Link to={`product/${props.item.id}`}>
          <Button className={stil.details}>View Details</Button>
        </Link>
        <Link to={`product/edit/${props.item.id}`}>
          <Button className={stil.edit}>Edit Product</Button>
        </Link>

        <Button onClick={deleteProduct} className={stil.delete}>Obriši proizvod</Button>
      </div>
    </li>
  );
};

export default ProductItem;
