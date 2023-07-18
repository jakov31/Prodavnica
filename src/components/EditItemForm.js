import { useContext } from "react";
import { useParams } from "react-router-dom";
import Kontext from "../store/context";

const EditItemForm = () => {
  const ctx = useContext(Kontext);
  const { id } = useParams();

  const EditingItem = ctx.items.filter(
    (item) => item.id.toString() === id.toString()
  );

  const editProductHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={editProductHandler}>
      <label htmlFor="naziv">Naziv</label>
      <input id="naziv" type="text" value={EditingItem.title} />

      <label htmlFor="cijena">Cijena</label>
      <input id="cijena" type="number" value={EditingItem.price} />

      <label htmlFor="opis">Opis</label>
      <input id="opis" type="text" value={EditingItem.description} />

      <button>Edit product</button>
    </form>
  );
};

export default EditItemForm;
