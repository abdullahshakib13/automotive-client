const ProductCard = ({ product }) => {
    const { image, name, brand, type, price, description } = product;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie"/></figure>
            <div className="flex justify-between">
                <div>
                    <h2 className="card-title">Name: { name}</h2>
                    <p>Brand Name: { brand}</p>
                    <p>Type: { brand}</p>
                    <p>Price: {price}</p>
                    <p>Short Description: { description}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">View</button>
                        <button className="btn">Edit</button>
                        {/* <button className="btn">Button</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;