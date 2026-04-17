import { useState, useEffect } from "react";


function HairRemedies() {
  const [data, setData]= useState([]);
  const [search, setSearch] = useState("");
  const [hairType, setHairType] = useState("");

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/remedies`)
      .then((res) => res.json())
      .then((data) => setData(data));
    
  },[]);

  const filtered = data.filter((r) =>
    ((r.type || r.category)?.toLowerCase() === "hair") &&
    ((r.problem || r.title)?.toLowerCase().includes(search.toLowerCase())) &&
    (hairType === "" || r.hairType?.toLowerCase() === hairType.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Hair Remedies</h2>
      <div className="guide">
        <h2>Note:</h2>
        <p>Always do patch test before applying any remedy to check for skin irritation or redness</p>
      </div>
      <input placeholder="Search (dandruff, hair fall...)" onChange={(e) => setSearch(e.target.value)}/>
      <select onChange={(e) => setHairType(e.target.value)}>
        <option value="">All</option>
        <option value="straight">Straight</option>
        <option value="wavy">Wavy</option>
        <option value="curly">Curly</option>
        <option value="coily">Coily</option>
      </select>
      <div className="card-container">
        {filtered.length === 0 ? (
          <p>No remedies found 😢</p>
        ) : (
          filtered.map((r, idx) => (
            <div className="card" key={r._id || r.id || idx}>
              <h3>{r.problem || r.title}</h3>
              <p><b>Ingredients:</b> {Array.isArray(r.ingredients) ? r.ingredients.join(", ") : r.ingredients}</p>
              <p><b>Steps:</b> {Array.isArray(r.steps) ? r.steps.join(", ") : r.steps}</p>
              <p><b>Tips:</b> {Array.isArray(r.tips) ? r.tips.join(", ") : r.tips}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HairRemedies;