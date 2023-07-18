import react, { useState } from "react";
import { useEffect } from "react";

const Kontext = react.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  editItem: (editedItem, id) => {},
  loadItems: (items) => {},
});

export const KontextProvider = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data.products));
    // const ucitajPodatke = async () => {
    //   const response = await fetch("https://dummyjson.com/products");
    //   const data = await response.json();

    //   setItems(data.products);
    // };

    // ucitajPodatke();
  }, []);

  const removeItemHandler = (id) => {
    setItems((prevLista) => {
      const skracenaLista = prevLista.filter((item) => item.id !== id);
      return skracenaLista;
    });
  };

  const addItemHandler = (item) => {
    setItems((prevLista) => {
      const produzenaLista = prevLista.concat(item);
      return produzenaLista;
    });
  };

  const editItemHandler = (editedItem, id) => {
    setItems((prevLista) => {
      const existingItemIndex = prevLista.findIndex((item) => item.id === id);
      // const existingItem = items[existingItemIndex]

      let updatedItems = { ...prevLista };
      prevLista[existingItemIndex] = editedItem;

      return updatedItems;
    });
  };

  const KontextValue = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    editItem: editItemHandler,
  };

  return (
    <Kontext.Provider value={KontextValue}>{props.children}</Kontext.Provider>
  );
};

export default Kontext;
