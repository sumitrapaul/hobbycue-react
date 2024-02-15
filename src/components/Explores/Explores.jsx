import './Explores.css'
const Explores = () => {
  return (
<div className="container mx-auto row mt-5">
<div className="col-lg-6 mb-4">
      <div className="card h-100 firstCard" style={{transition: "background-color 0.3s ease"}}>
        <div className="card-body">
          <div className="d-flex gap-4 justify-content-start">
            <div>
              <img src="/public/Group.png" alt="" />
            </div>
            <div>People</div>
          </div>
          <p className="card-text">
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.
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
            Connect
          </button>
        </div>
      </div>
      </div>
      <div className="col-lg-6 mb-4">
      <div className="card h-100 secondCard">
        <div className="card-body">
          <div className="d-flex gap-4 justify-content-start">
            <div>
              <img src="/public/Vector (3).png" alt="" />
            </div>
            <div>Place</div>
          </div>
          <p className="card-text">
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
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
            Meet up
          </button>
        </div>
      </div>
      </div>
      <div className="col-lg-6 mb-4">
      <div className="card h-100 thirdCard">
        <div className="card-body">
          <div className="d-flex gap-4 justify-content-start">
            <div>
              <img src="/public/Vector (4).png" alt="" />
            </div>
            <div>Product</div>
          </div>
          <p className="card-text">
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
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
            Get it
          </button>
        </div>
      </div>
      </div>
      <div className="col-lg-6 mb-4">
      <div className="card h-100 fourthCard">
        <div className="card-body">
          <div className="d-flex gap-4 justify-content-start">
            <div>
              <img src="/public/event.png" alt="" />
            </div>
            <div>Program</div>
          </div>
          <p className="card-text">
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
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
            Attend
          </button>
        </div>
      </div>
      </div>
    </div>

  );
};

export default Explores;
