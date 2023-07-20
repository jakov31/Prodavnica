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
  }, []);

  const removeItemHandler = (id) => {
    setItems((prevLista) => {
      const skracenaLista = prevLista.filter((item) => item.id !== id);
      return skracenaLista;
    });
  };

  const addItemHandler = (item) => {
    setItems((prevLista) => [...prevLista, item]);
  };

  const editItemHandler = (editedItem, id) => {
    setItems((prevLista) => {
      const existingItemIndex = prevLista.findIndex((item) => item.id === id);

      let updatedList;

      updatedList = [...prevLista];
      updatedList[existingItemIndex] = editedItem;

      return updatedList;
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
