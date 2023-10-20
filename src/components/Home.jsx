import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
// import Navbar from './Navbar/Navbar';
import ProductCard from './AddProduct/ProductCard';
import BrandName from './BrandName/BrandName';

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <BrandName></BrandName>
            <div className='m-20'>
                <h2 className='text-center'>Home: {products.length}</h2>
                <div className='grid grid-cols-2'>
                    {
                      products.map(product=> <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;