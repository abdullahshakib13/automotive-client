
// import Brand from "./Brand";

// import { useLoaderData } from "react-router-dom";
// import PropTypes from 'prop-types';



const BrandName = ({brandName}) => {
    const { id, brand_name, image } = brandName;
    console.log(id, brand_name,image);

    return (
        <div>
            <div className="w-10/12 mb-8 space-y-4 mx-auto">
                <div className="card bg-base-100 shadow-xl w-[312px] h-[250px] ">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>{ brand_name}</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default BrandName;

// BrandName.propTypes = {
//     children: PropTypes.brandName.node
// }