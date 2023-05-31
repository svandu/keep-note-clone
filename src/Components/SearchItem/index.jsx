// eslint-disable-next-line react/prop-types
export default function SearchItem( { search, setSearch }) {
  return (
    <form className="searchform" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
