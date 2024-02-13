

const Testimonials = () => {
    return (
        <div>
            <div className="container px-4 d-flex justify-content-center align-items-center" style={{ height: "450px", backgroundColor: "#FFFFFF" }}>
      <div style={{height: "380px", backgroundColor: "#F7F5F9"}} className="card w-75 mx-auto">
        <div className="card-body">
            <div className="d-flex gap-4 mb-4">
            <div className="d-flex justify-conternt-center align-items-center"><img className="w-100" src="/public/quote.png" alt="" /></div>
          <div className="d-flex justify-conternt-center align-items-center"><h5 className="card-title">Testimonials</h5></div>
            </div>
          <p className="card-text">
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <div style={{flex: 1}}>
                <img className="w-100" src="/public/Rectangle 85.png" alt="" />
            </div>
           <div style={{flex: 1, marginLeft: "340px"}} className="d-flex gap-3">
           <div className="d-flex justify-content-center align-items-center"><img src="/public/Ellipse 12.png" alt="" /></div>
            <div className="d-flex-col justify-content-center align-items-center mt-3">
                <h6 className="fs-12" style={{color: "#8064A2"}}>Shubha Nagarajan</h6>
                <p style={{color: "#0096C8"}}>Classical Dancer</p>
            </div>
           
           </div>
          </div>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Testimonials;