import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;

        const newProduct = { image, name, brand, type, price, description };
        console.log(newProduct);

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                        })
                }
        })
        
    }
    return (
        <div className="bg-blue-200 p-24">
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="image" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="brand name" className="input input-bordered" />
                        </label>
                    </div>
                    {/* Select Type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs" name="type">
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
                            <input type="text" name="price" placeholder="price" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <textarea className="textarea textarea-bordered" name="description" placeholder="Short Description"></textarea>
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
                <input type="submit" value="Add Product" className="btn btn-info" />
            </form>
        </div>
    );
};

export default AddProduct;