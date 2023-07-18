import { useContext, useState } from "react";
import Kontext from "../store/context";

const AddItemForm = () => {
  const ctx = useContext(Kontext);
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
      }),
    })
      .then((res) => res.json())
      .then((data) => ctx.addItem(data));
  };

  return (
    <form onSubmit={dodajProizvodHandler}>
      <label htmlFor="naziv">Naziv proizvoda</label>
      <input id="naziv" type="text" onChange={ocitavanjeTitle} />
      <br />
      <label htmlFor="brend">Brend</label>
      <input id="brend" type="text" onChange={ocitavanjeBrenda} />
      <br />
      <label htmlFor="kategorija">Kategorija proizvoda</label>
      <input id="kategorija" type="text" onChange={ocitavanjeKategorije} />
      <br />
      <label htmlFor="opis">Opis proizvoda</label>
      <input id="opis" type="text" onChange={ocitavanjeOpisa} />
      <br />
      <label htmlFor="popust">Popust</label>
      <input id="popust" type="number" onChange={ocitavanjePopusta} />
      <br />
      <label htmlFor="cijena">Cijena proizvoda</label>
      <input id="cijena" type="number" onChange={ocitavanjeCijene} />
      <br />
      <label htmlFor="rejting">Rejting proizvoda</label>
      <input id="rejting" type="number" onChange={ocitavanjeRejtinga} />
      <br />
      <label htmlFor="zalihe">Zalihe proizvoda</label>
      <input id="zalihe" type="number" onChange={ocitavanjeZaliha} />
      <br />
      <button>+Dodaj</button>
    </form>
  );
};

export default AddItemForm;
