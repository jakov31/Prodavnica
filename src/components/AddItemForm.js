import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import Kontext from "../store/context";
import Button from "../UI/Button";
import stil from "./AddItemForm.module.css";

const AddItemForm = () => {
  const ctx = useContext(Kontext);
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [brend, setBrend] = useState("");
  const [kategorija, setKategorija] = useState("");
  const [opis, setOpis] = useState("");
  const [popust, setPopust] = useState("");
  const [cijena, setCijena] = useState("");
  const [rejting, setRejting] = useState("");
  const [zalihe, setZalihe] = useState("");

  const ocitavanjeTitle = (event) => {
    return settitle(event.target.value);
  };
  const ocitavanjeBrenda = (event) => {
    return setBrend(event.target.value);
  };
  const ocitavanjeKategorije = (event) => {
    return setKategorija(event.target.value);
  };
  const ocitavanjeOpisa = (event) => {
    return setOpis(event.target.value);
  };
  const ocitavanjePopusta = (event) => {
    return setPopust(event.target.value);
  };
  const ocitavanjeCijene = (event) => {
    return setCijena(event.target.value);
  };
  const ocitavanjeRejtinga = (event) => {
    return setRejting(event.target.value);
  };
  const ocitavanjeZaliha = (event) => {
    return setZalihe(event.target.value);
  };

  const dodajProizvodHandler = (event) => {
    event.preventDefault();

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        brand: brend,
        category: kategorija,
        description: opis,
        discountPercentage: popust,
        price: cijena,
        rating: rejting,
        stock: zalihe,
        images: ""
      }),
    })
      .then((res) => res.json())
      .then((data) => ctx.addItem(data));

    settitle("");
    setBrend("");
    setKategorija("");
    setOpis("");
    setPopust("");
    setCijena("");
    setRejting("");
    setZalihe("");
    navigate("/")
  };

  return (
    <form onSubmit={dodajProizvodHandler} className={stil.addForm}>
      <div>
        <label htmlFor="naziv">Naziv proizvoda</label>
        <input
          value={title}
          id="naziv"
          type="text"
          onChange={ocitavanjeTitle}
          required
        />
        <br />
      </div>
      <div>
        <label htmlFor="brend">Brend</label>
        <input
          value={brend}
          id="brend"
          type="text"
          onChange={ocitavanjeBrenda}
        />
        <br />
      </div>
      <div>
        <label htmlFor="kategorija">Kategorija proizvoda</label>
        <input
          value={kategorija}
          id="kategorija"
          type="text"
          onChange={ocitavanjeKategorije}
        />
        <br />
      </div>
      <div>
        <label htmlFor="opis">Opis proizvoda</label>
        <input value={opis} id="opis" type="text" onChange={ocitavanjeOpisa} />
        <br />
      </div>
      <div>
        <label htmlFor="popust">Popust</label>
        <input
          value={popust}
          id="popust"
          type="number"
          onChange={ocitavanjePopusta}
        />
        <br />
      </div>
      <div>
        <label htmlFor="cijena">Cijena proizvoda</label>
        <input
          value={cijena}
          id="cijena"
          type="number"
          onChange={ocitavanjeCijene}
          required
        />
        <br />
      </div>
      <div>
        <label htmlFor="rejting">Rejting proizvoda</label>
        <input
          value={rejting}
          id="rejting"
          type="number"
          onChange={ocitavanjeRejtinga}
        />
        <br />
      </div>
      <div>
        <label htmlFor="zalihe">Zalihe proizvoda</label>
        <input
          value={zalihe}
          id="zalihe"
          type="number"
          onChange={ocitavanjeZaliha}
          required
        />
        <br />
      </div>
      <Button className={stil.dodajdugme}>+Dodaj</Button>
    </form>
  );
};

export default AddItemForm;
