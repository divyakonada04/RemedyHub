import { useState, useEffect } from "react";


function SkinRemedies() {
  const [data, setData]= useState([]);
  const [search, setSearch] = useState("");
  const [skinType, setSkinType] = useState("");

  useEffect(()=>{
    fetch("http://localhost:5000/api/remedies")
      .then((res) => res.json())
      .then((data) => setData(data));
  },[]);
  const filtered = data.filter((r) =>
  r.type === "skin" &&
  r.problem.toLowerCase().includes(search.toLowerCase()) &&
  (skinType === "" || r.skinType?.toLowerCase() === skinType.toLowerCase() || r.sinType ==="All")
  );
return (
<div className="page">
<h2>Skin Remedies</h2>
<div className="guide">
<h2>SkinType Guide:</h2>
<ul>
<li>To determine your skin type, use the bare-faced method: cleanse with a gentle cleanser, pat dry, and leave it bare for 30-60 minutes. </li>
<li>If your skin feels tight/flaky, it is dry. If it looks shiny, it is oily. If the T-zone (nose/forehead) is shiny but cheeks are dry, it is combination.</li>
</ul>
<h2>Note:</h2>
<p>Always do patch test before applying any remedy to check for skin irritation or redness</p>
</div>
<input placeholder="Search (acne, oily...)" onChange={(e) => setSearch(e.target.value)}/>
<select onChange={(e) => setSkinType(e.target.value)}>
<option value="">All Skin Types</option>
<option value="oily">Oily</option>
<option value="dry">Dry</option>
<option value="combination">Combination</option>
<option value="sensitive">Sensitive</option>
</select>
<div className="card-container">
{filtered.length === 0 ? (
<p>No remedies found 😢</p>
) : (
filtered.map((r) => (
<div className="card" key={r.id}>
<h3>{r.problem}</h3>
<p><b>Ingredients:</b> {r.ingredients?.join(", ")}</p>
<p><b>steps:</b> {r.steps?.join(", ")}</p>
<p><b>tips:</b> {r.tips?.join(", ")}</p>
</div>
))
)}
</div>
</div>
);
}
export default SkinRemedies;