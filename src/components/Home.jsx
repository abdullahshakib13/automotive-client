import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
// import Navbar from './Navbar/Navbar';
import ProductCard from './AddProduct/ProductCard';
import BrandName from './BrandName/BrandName';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    // const products = useLoaderData();
    const brandNames = useLoaderData();
    console.log(brandNames);
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            {/* <BrandName></BrandName> */}
            <div className='grid grid-cols-3 mt-20'>
                {
                brandNames.map(brandName=><BrandName key={brandName.id} brandName={brandName}></BrandName>)
            }
            </div>
            <div className='m-20'>
                {/* <h2 className='text-center'>Home: {products.length}</h2> */}
                {/* <div className='grid grid-cols-2'>
                    {
                      products.map(product=> <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div> */}
            </div>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>

            <Footer></Footer>
        </div>
    );
};

export default Home;