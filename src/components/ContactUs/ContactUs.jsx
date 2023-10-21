

const ContactUs = () => {
    return (
        <div className="mt-14">
            <div>
                <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
            </div>
            <div className="flex items-center justify-center">
                <form className="">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="your name" className="input input-bordered" />
                    </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" placeholder="your email" className="input input-bordered" />
                        </label>
                    </div>
                    <button className="btn btn-primary mt-3">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;