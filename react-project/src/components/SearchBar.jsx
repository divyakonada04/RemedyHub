import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SearchBar(){
    const[query,setQuery]=useState("")
    const navigate= useNavigate()

const handleSearch = () => {
  if (!query.trim()) return; // empty search avoid
  navigate(`/search?q=${query}`);
};
return(
<div className="search-box">
<input type="text" placeholder="Search problem.." onChange={(e)=>setQuery(e.target.value)}/>
<button onClick={handleSearch}>Search</button>
</div>
);
}
export default SearchBar;