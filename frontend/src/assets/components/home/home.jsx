import { useEffect } from "react";
import './home.css';

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []); // empty dependency array = run once on mount

    return (
        <div className="home-container">
            <h1>Welcome to the Library Place Management</h1>
        </div>
    );
};

export default Home;