 import { Link } from "react-router-dom"


 function Navbar() {
  return (
    <nav style = {{display:"flex",gap:"20px",padding:"10px",background: "#4caf50"}}>
    <h2>RemedyHub🌿</h2>
    <div>
    <Link to="/">Home</Link>
    <Link to="/skin">Skin</Link>
    <Link to="/hair">Hair</Link>
    <Link to="/guide">Guide</Link>
    {/* <Link to="#about">About</Link> */}
    <a href="#about">About</a>
      </div>
    </nav>
  );
}
export default Navbar;