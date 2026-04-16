import { useLocation } from "react-router-dom";
import { useEffect, useState} from "react";

function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/remedies/search?q=${query}`)
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
    results.map((r) => (
    <div className="card" key={r.id}>
    <h3>{r.problem}</h3>
    <p><b>Ingredients:</b> {r.ingredients.join(", ")}</p>
    <p><b>Steps:</b> {r.steps}</p>
    <p><b>Tips:</b> {r.tips}</p>
    </div>
    ))
   )}
  </div>
  </div>
  );
}
export default Search;

