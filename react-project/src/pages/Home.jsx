import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import About from './About';

function Home() {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div className='img'
                style={{
                    backgroundImage: "url('/Sbg.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 30%',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '370px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: '20px',
                    paddingRight: '20px'
                }}
            >

                <h1>Welcome to RemedyHub🌿</h1>
                <p>Select your skin or hair type, explore issues like acne, frizzy hair, or hair fall, and receive personalized
                    remedies with ingredients and step by step application guidance.
                </p></div>
            <SearchBar />
            <button onClick={() => navigate("/skin")}>Skin</button>
            <button onClick={() => navigate("/hair")}>Hair</button>
            <About />
        </div>
    );
}
export default Home;
