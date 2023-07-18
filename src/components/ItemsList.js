import { useContext } from "react";
import Kontext from "../store/context";
import Card from "../UI/Card";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const ItemsList = (props) => {
  const ctx = useContext(Kontext);

  const removeItem = (id) => {
    ctx.removeItem(id);
  };

  const ViewDetailsHandler = (id) => {
    props.onViewDetailsHandler(id);
  };

  // const editItemHandler = (item) => {
  //   ctx.editItem(item, item.id);
  // };

  const lista = (
    <div>
      <ul>
        {ctx.items.map((item) => (
          <ProductItem
            // editItemHandler={editItemHandler}
            onViewDetails={ViewDetailsHandler}
            onRemoveItemHandler={removeItem}
            key={item.id}
            id={item.id}
            name={item.title}
            price={item.price}
          />
        ))}
      </ul>
      <Link to="/product/add">
        <button>Dodaj proizvod</button>
      </Link>
    </div>
  );

  return <Card>{lista}</Card>;
};

export default ItemsList;
