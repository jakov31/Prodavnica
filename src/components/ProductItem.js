import { Link } from "react-router-dom";
import { useState } from "react";
import stil from "./ProductItem.module.css";

const ProductItem = (props) => {
  const [editing, setEditing] = useState();

  const removeItemHandler = () => {
    props.onRemoveItemHandler(props.id);
  };

  return (
    <li className={stil.lista}>
      <div className={stil.info}>
        <div>slika</div>
        <div>
          <h2>{props.name}</h2>
          <p>{props.price}</p>
        </div>
      </div>
      <div className={stil.dugmad}>
        <Link to={`product/${props.id}`}>
          <button>View Details</button>
        </Link>
        <button>Edit Product</button>
        <button onClick={removeItemHandler}>Delete Product</button>
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
