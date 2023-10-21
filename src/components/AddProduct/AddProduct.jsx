import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;

        const newProduct = { name, brand, type, price, description,image }
        console.log(newProduct);

        fetch('https://automotive-server-fre82u6n1-abdullah-shakibs-projects.vercel.app/product', {
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
        
        <div className="bg-blue-200 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
  <h2 className='text-2xl font-semibold text-center mb-6'>Add Product</h2>
  <form onSubmit={handleAddProduct} className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto">
    <div className="flex flex-col mb-4 sm:flex-row">
      <div className="form-control w-full sm:w-1/2 sm:mr-4">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <label className="input-group">
          <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
        </label>
      </div>
      <div className="form-control w-full sm:w-1/2">
        <label className="label">
          <span className="label-text">Brand Name</span>
        </label>
        <label className="input-group">
          <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
        </label>
      </div>
    </div>
    {/* Select Type */}
    <div className='flex flex-col mb-4 sm:flex-row'>
      <div className="form-control w-full sm:w-1/2 sm:mr-4">
        <label className="label">
          <span className="label-text">Type</span>
        </label>
        <select className="select select-bordered w-full" name="type">
          <option disabled selected>Select Category</option>
          <option>Toyota</option>
          <option>Ford</option>
          <option>BMW</option>
          <option>Mercedes-Benz</option>
          <option>Tesla</option>
          <option>Honda</option>
        </select>
      </div>
      <div className="form-control w-full sm:w-1/2">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <label className="input-group">
          <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
        </label>
      </div>
    </div>
    <div className='flex flex-col mb-4 sm:flex-row'>
      <div className="form-control w-full sm:w-1/2 sm:mr-4">
        <label className="label">
          <span className="label-text">Short description</span>
        </label>
        <label className="input-group">
          <textarea className="textarea textarea-bordered w-full" name="description" placeholder="Short Description"></textarea>
        </label>
      </div>
      <div className="form-control w-full sm:w-1/2">
        <label className="label">
          <span className="label-text">Image</span>
        </label>
        <label className="input-group">
          <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
        </label>
      </div>
    </div>
    <div className="rating">
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </div>
    <br />
    <input type="submit" value="Add Product" className="btn btn-info" />
  </form>
</div>

    );
};

export default AddProduct;