
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (id.trim() !== "") {
      navigate(`/products/${id}`);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Amazing Products
      </Link>

      <div className="search-box">
        <input
          type="number"
          placeholder="Enter Product ID..."
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <button onClick={handleSearch}>
          Rechercher
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
