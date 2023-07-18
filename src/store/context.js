import react, { useState } from "react";

const Kontext = react.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  editItem: (editedItem, id) => {},
  loadItems: (items) => {},
});

export const KontextProvider = (props) => {
  const [items, setItems] = useState([]);

  const loadItemsHandler = (items) => {
    setItems(items);
  };

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
    loadItems: loadItemsHandler,
  };

  return (
    <Kontext.Provider value={KontextValue}>{props.children}</Kontext.Provider>
  );
};

export default Kontext;
