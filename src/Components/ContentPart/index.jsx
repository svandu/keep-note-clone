import "./contentpart.scss";
import ItemsList from "../ItemsList";

// eslint-disable-next-line react/prop-types
export default function ContentPart({
  // eslint-disable-next-line react/prop-types
  items,
  // eslint-disable-next-line react/prop-types
  handleCheck,
  // eslint-disable-next-line react/prop-types
  handleDelete,
  // eslint-disable-next-line react/prop-types
  length,
}) {
  return (
    <>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
      <p>
        {length} List {length === 1 || length === 0 ? "item" : "items"}
      </p>
    </>
  );
}
