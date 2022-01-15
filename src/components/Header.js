import { useRef } from "react";

export default function Header({ setUsername }) {
  const ref = useRef();

  return (
    <header className="header">
      <h2>Git List</h2>
      <div className="search-bar">
        <input type="search" placeholder="Username" ref={ref} />
        <button onClick={() => setUsername(ref.current.value)}>Go</button>
      </div>
    </header>
  );
}
