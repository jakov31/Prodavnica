import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductItem from "./components/ProductItem";
import AddItemForm from "./components/AddItemForm";
import DetailPage from "./components/DetailPage";
import Kontext from "./store/context";
import EditItemForm from "./components/EditItemForm";

function App() {
  const ctx = useContext(Kontext);

  const removeItem = (id) => {
    ctx.removeItem(id);
  };

  const lista = (
    <div>
      <ul>
        {ctx.items.map((item) => (
          <ProductItem
            onRemoveItemHandler={removeItem}
            key={item.id}
            item={item}
          />
        ))}
      </ul>
      <Link to="/product/add">
        <button>Dodaj proizvod</button>
      </Link>
    </div>
  );

  return (
    <Routes>
      <Route path={"/"} element={lista} />
      <Route path={"/product/:id"} element={<DetailPage />} />
      <Route path={"/product/edit/:id"} element={<EditItemForm />} />
      <Route path={"/product/add"} element={<AddItemForm />} />
    </Routes>
  );
}

export default App;
