import {useNavigate} from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import About from './About';

function Home(){
const navigate=useNavigate();
return(
<div className='home'>
<div className='img'>
<h1>Welcome to RemedyHub🌿</h1>
<p>Select your skin or hair type, explore issues like acne, frizzy hair, or hair fall, and receive personalized 
remedies with ingredients and step by step application guidance.
</p></div>
<SearchBar/>
<button onClick={()=>navigate("/skin")}>Skin</button> 
<button onClick={()=>navigate("/hair")}>Hair</button> 
<About/>
</div>
);
}
export default Home;
