import { useState, useEffect } from "react";


function HairRemedies() {
  const [data, setData]= useState([]);
  const [search, setSearch] = useState("");
  const [hairType, setHairType] = useState("");

  useEffect(()=>{
    fetch("http://localhost:5000/api/remedies")
      .then((res) => res.json())
      .then((data) => setData(data));
    
  },[]);
  const filtered = data.filter((r) =>
  r.type === "hair" && r.problem.toLowerCase().includes(search.toLowerCase()) && (hairType === "" || r.hairType?.toLowerCase() === hairType.toLowerCase())
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
filtered.map((r) => (
<div className="card" key={r.id}>
<h3>{r.problem}</h3>
<p><b>Ingredients:</b> {r.ingredients?.join(", ")}</p>
<p><b>Steps:</b></p>
<p><b>steps:</b> {r.steps?.join(", ")}</p>
<p><b>tips:</b> {r.tips?.join(", ")}</p>
</div>
))
)}
</div>
</div>
);
}

export default HairRemedies;