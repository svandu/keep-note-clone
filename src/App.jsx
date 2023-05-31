import { useState, useEffect } from "react";
import "./App.css";
import ContentPart from "./Components/ContentPart";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import AddItem from "./Components/AddItem";
import SearchItem from "./Components/SearchItem";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // add item
    addItem(newItem);
    setNewItem("");
  };

  return (
    <>
      <NavBar />
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <ContentPart
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck} 
        handleDelete={handleDelete}
        length={items.length}
      />
    </>
  );
}

export default App;

// to run the json server
// npx json-server -p 3500 -w data/db.json
