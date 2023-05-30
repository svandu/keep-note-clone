import { useState } from "react";
import "./App.css";
import ContentPart from "./Components/ContentPart";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import AddItem from "./Components/AddItem";

function App() {

  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag 0of Cococa Covered Almonds Unsalted"
    },
    {
      id: 2, 
      checked: false,
      item: "Item 2"
    }, 
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setAndSaveItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !==id)
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    console.log(newItem)
    // add item
    addItem(newItem)
    setNewItem('');
  }

  return (
    <>
      <NavBar />
      <Header title="Groceries List"/>
      <AddItem newItem ={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <ContentPart items ={items} handleCheck={handleCheck} handleDelete={handleDelete} length = {items.length}/>
    </>
  );
}

export default App;