import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2>Home</h2>
            <Footer></Footer>
        </div>
    );
};

export default Home;