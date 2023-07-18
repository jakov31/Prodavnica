import { useContext, useEffect } from "react";
import ItemsList from "./components/ItemsList";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Kontext from "./store/context";
import AddItemForm from "./components/AddItemForm";
import DetailPage from "./components/DetailPage";

function App() {
  // const [id, setId] = useState("");
  const ctx = useContext(Kontext);

  const loadItems = ctx.loadItems;

  useEffect(() => {
    const ucitajPodatke = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);

      loadItems(data.products);
    };

    ucitajPodatke();
  }, []);

  // const onViewDetailsHandler = (id) => {
  //   setId(id);
  // };

  return (
    <Routes>
      <Route path={"/"} element={<ItemsList />} />
      <Route path={"/product/add"} element={<AddItemForm />} />

      <Route path={"/product/:id"} element={<DetailPage />} />
    </Routes>
  );
}

export default App;
