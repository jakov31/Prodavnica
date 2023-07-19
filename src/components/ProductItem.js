import { useContext } from "react";
import { Link } from "react-router-dom";
import Kontext from "../store/context";

import stil from "./ProductItem.module.css";

const ProductItem = (props) => {
  const ctx = useContext(Kontext);

  const deleteProduct = () => {
    fetch(`https://dummyjson.com/products/${props.item.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => ctx.removeItem(data.id));
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
          <button>View Details</button>
        </Link>
        <Link to={`product/edit/${props.item.id}`}>
          <button>Edit Product</button>
        </Link>

        <button onClick={deleteProduct}>Obriši proizvod</button>
      </div>
    </li>
  );
};

export default ProductItem;

// brand: brand,
// category: category,
// description: description,
// discountPercentage: discountPercentage,
// stock: stock,
// rating: rating,
