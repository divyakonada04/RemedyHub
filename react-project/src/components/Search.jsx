import { useLocation } from "react-router-dom";
import { useEffect, useState} from "react";

function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/remedies/search?q=${query}`)
      .then(res => res.json())
      .then(data => setResults(data));
  }, [query]);
  
  return (
    <div className="page">
    <h2>Results for: {query}</h2>

    <div className="card-container">
    {results.length === 0 ? (
    <p>No results found</p>
    ) : (
    results.map((r, idx) => (
    <div className="card" key={r._id || r.id || idx}>
    <h3>{r.title || r.problem}</h3>
    <p><b>Ingredients:</b> {Array.isArray(r.ingredients) ? r.ingredients.join(", ") : (r.ingredients || "No ingredients listed")}</p>
    <p><b>Steps:</b> {Array.isArray(r.steps) ? r.steps.join(", ") : (r.steps || "No steps listed")}</p>
    <p><b>Tips:</b> {Array.isArray(r.tips) ? r.tips.join(", ") : (r.tips || "No tips available")}</p>
    </div>
    ))
   )}
  </div>
  </div>
  );
}
export default Search;

