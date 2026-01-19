export default function Header({ query, onQueryChange }) {
  return (
    <header className="header">
      <h1>STUDIO SHOWCASE</h1>
      <input
        className="input"
        type="search"
        placeholder="Search projects..."
        value={query}
        onChange={e => onQueryChange(e.target.value)}
      />
    </header>
  );
}