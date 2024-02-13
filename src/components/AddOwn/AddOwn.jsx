const AddOwn = () => {
  return (
    <div className="container px-4 d-flex justify-content-center align-items-center" style={{ height: "450px", backgroundColor: "#F7FDFF" }}>
      <div style={{height: "250px"}} className="card w-75 mx-auto">
        <div className="card-body">
            <div className="d-flex gap-4 mb-4">
            <div className="d-flex justify-conternt-center align-items-center"><img className="w-100" src="/public/Add.png" alt="" /></div>
          <div className="d-flex justify-conternt-center align-items-center"><h5 className="card-title">Add your own</h5></div>
            </div>
          <p className="card-text">
          Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
          </p>
          <button
            className="btn btn-outline mt-2"
            style={{
              border: "1px solid #8064A2",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "112px",
              height: "40px",
              color: "#8064A2",
            }}
            type="submit"
          >
            Add new
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOwn;
