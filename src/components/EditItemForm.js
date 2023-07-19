import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Kontext from "../store/context";
import Button from "../UI/Button";
import stil from "./EditItemForm.module.css";
const EditItemForm = () => {
  const ctx = useContext(Kontext);
  const { id } = useParams();
  const navigate = useNavigate();
  const EditingItem = ctx.items.filter(
    (item) => item.id.toString() === id.toString()
  );

  const [naziv, setNaziv] = useState(EditingItem.title);
  const [cijena, setCijena] = useState(EditingItem.price);
  const [opis, setOpis] = useState(EditingItem.description);

  const citacNaziva = (event) => {
    setNaziv(event.target.value);
  };
  const citacCijene = (event) => {
    setCijena(event.target.value);
  };
  const citacOpisa = (event) => {
    setOpis(event.target.value);
  };

  const editProductHandler = (event) => {
    event.preventDefault();

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: naziv,
        price: cijena,
        description: opis,
      }),
    })
      .then((res) => res.json())
      .then((data) => ctx.editItem(data, +id));

    navigate("/");
  };

  return (
    <form onSubmit={editProductHandler} className={stil.addForm}>
      <label htmlFor="naziv">Naziv</label>
      <div>
        <input
          id="naziv"
          type="text"
          value={EditingItem.title}
          onChange={citacNaziva}
        />
      </div>
      <div>
        <label htmlFor="cijena">Cijena</label>
        <input
          id="cijena"
          type="number"
          value={EditingItem.price}
          onChange={citacCijene}
        />
      </div>
      <div>
        <label htmlFor="opis">Opis</label>
        <input
          id="opis"
          type="text"
          value={EditingItem.description}
          onChange={citacOpisa}
        />
      </div>

      <Button>Edit product</Button>
    </form>
  );
};

export default EditItemForm;
