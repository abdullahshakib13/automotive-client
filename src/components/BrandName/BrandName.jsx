
// import Brand from "./Brand";

// import { useLoaderData } from "react-router-dom";



const BrandName = ({brandName}) => {
    const { id, brand_name, image } = brandName;

    return (
        <div>
            {/* <div>
                <h2>Fetured Brand</h2>
            </div> */}
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{}</h2>
                    <p>{ brand_name}</p>
                </div>
            </div>
        </div>
        
    );
};

export default BrandName;