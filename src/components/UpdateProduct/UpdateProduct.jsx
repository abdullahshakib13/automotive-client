import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, image, name, brand, type, price, description } = product;
    
    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;

        const updatedProduct = { image, name, brand, type, price, description };
        console.log(updatedProduct);

        fetch(`https://automotive-server-fre82u6n1-abdullah-shakibs-projects.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Product Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                        })
                }
        })
        
    }
        
    return (
        <div className="bg-blue-200 p-24">
            <h2>Update Product:{ name}</h2>
            <form onSubmit={handleUpdateProduct}>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={image} placeholder="image" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={brand }   placeholder="brand name" className="input input-bordered" />
                        </label>
                    </div>
                    {/* Select Type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs" name="type" defaultValue={type}>
                        <option disabled selected>Select Category</option>
                        <option>Toyota</option>
                        <option>Ford</option>
                        <option>BMW</option>
                        <option>Mercedes-Benz</option>
                        <option>Tesla</option>
                        <option>Honda</option>
                    </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <textarea className="textarea textarea-bordered" name="description" defaultValue={description} placeholder="Short Description"></textarea>
                        </label>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <input type="submit" value="Update Product" className="btn btn-info" />
            </form>
        </div>
    );
};

export default UpdateProduct;