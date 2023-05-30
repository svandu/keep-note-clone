import DeleteIcon from "@mui/icons-material/Delete";

export default function ItemsList({items, handleCheck, handleDelete}) {
  return (
    <ul className="item-container">
        {items.map((item) => (
        <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} className="checkmark" onChange={() => handleCheck(item.id)}/>
            <label style={(item.checked) ? {textDecoration: 'line-through'} : null} onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
            <button onClick={() => handleDelete(item.id)}><DeleteIcon /></button>
        </li>
        ))}
    </ul>
  )
}
