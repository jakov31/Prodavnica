import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductItem from "./components/ProductItem";
import AddItemForm from "./components/AddItemForm";
import DetailPage from "./components/DetailPage";
import Kontext from "./store/context";
import EditItemForm from "./components/EditItemForm";
import Button from "./UI/Button";
import stil from "./App.module.css";

function App() {
  const [brojac, setBrojac] = useState(9);
  const ctx = useContext(Kontext);

  const brojacHandler = () => {
    setBrojac((prebrojac) => prebrojac + 9);
  };

  const items = ctx.items;

  const lista = items.slice(0, brojac);

  const sadrzaj = (
    <div className={stil.sadrzaj}>
      <ul>
        {lista.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
      <div className={stil.dugmad}>
        <Link to="/product/add">
          <Button>Dodaj proizvod</Button>
        </Link>
        {brojac < items.length && (
          <Button onClick={brojacHandler}>Učitaj još...</Button>
        )}
      </div>
    </div>
  );

  // const loadingSpiner = <div className={stil.loader}></div>;

  return (
    <Routes>
      <Route path={"/"} element={sadrzaj} />
      <Route path={"/product/:id"} element={<DetailPage />} />
      <Route path={"/product/edit/:id"} element={<EditItemForm />} />
      <Route path={"/product/add"} element={<AddItemForm />} />
    </Routes>
  );
}

export default App;
