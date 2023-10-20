import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const {_id, image, name, brand, type, price, description } = product;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie"/></figure>
            <div className="flex  justify-between pr-4 w-full">
                <div>
                    <h2 className="card-title">Name: { name}</h2>
                    <p>Brand Name: { brand}</p>
                    <p>Type: { type}</p>
                    <p>Price: {price}</p>
                    <p>Short Description: { description}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">View</button>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className="btn">Edit</button>
                        </Link>
                        {/* <button className="btn">Button</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;