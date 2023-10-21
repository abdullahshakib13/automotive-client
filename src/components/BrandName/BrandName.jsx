import { Link } from "react-router-dom";

const BrandName = ({brandName}) => {
    const { id, brand_name, image } = brandName;
    console.log(id, brand_name,image);

    return (
        <div>
            <Link to="/ProductCard">
                {/* <div className="w-10/12 mb-8 space-y-4 mx-auto"> */}
                <div className="w-full w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <div className="card bg-base-100 shadow-xl w-[312px] h-[250px] ">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className="text-lg font-medium text-center">{ brand_name}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        
    );
};

export default BrandName;

// BrandName.propTypes = {
//     children: PropTypes.brandName.node
// }