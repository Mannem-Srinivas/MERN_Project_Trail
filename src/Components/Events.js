import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import image1 from './Images/EventImage1.jpeg'
import image2 from './Images/EventImage2.jpeg'
import image3 from './Images/EventImage3.jpeg'
import image4 from './Images/EventImage4.jpeg'
import image5 from './Images/EventImage5.jpeg'
import AddEventImage from './Images/AddEventImage.jpeg'


export default function Events({ eventcard = [{}], key = {} }) {

  return (
    <>
      <div className="EventsHead">
        <div className="row">
          {
            eventcard.map((Element, idx) => {
              return (
                <div key={idx} className="col Event-hover">
                  <div className="card shadow" style={{ width: "280px", height: "600px" }}>
                    <img src={AddEventImage} className="card-img-top" alt="..." style={{ height: '350px' }} />
                    <div className="card-body">
                      <h5 className="card-title">{Element.eventname}</h5>
                      <p className="card-text">
                        {Element.description}
                      </p>
                      <Link to='/EventInfo' className="btn btn-primary me-3">More Info</Link>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#BuyTicketsModal">Buy Tickets</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <div className="col Event-hover">
            <div className="card shadow" style={{ width: "280px", height: "600px" }}>
              <img src={image1} className="card-img-top" alt="..." style={{ height: '350px' }} />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">
                  In the symphony of life, a music concert is where the heart finds its rhythm, and the soul dances to the melody of shared emotions.
                </p>
                <Link to='/EventInfo' className="btn btn-primary me-3">More Info</Link>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#BuyTicketsModal">Buy Tickets</button>
              </div>
            </div>
          </div>
          <div className="col Event-hover">
            <div className="card shadow" style={{ width: "280px", height: "600px" }}>
              <img src={image2} className="card-img-top" alt="..." style={{ height: '350px' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  In the symphony of life, a music concert is where the heart finds its rhythm, and the soul dances to the melody of shared emotions.
                </p>
                <Link to='/EventInfo' className="btn btn-primary me-3">More Info</Link>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#BuyTicketsModal">Buy Tickets</button>
              </div>
            </div>
          </div>
          <div className="col Event-hover">
            <div className="card shadow" style={{ width: "280px", height: "600px" }}>
              <img src={image3} className="card-img-top" alt="..." style={{ height: '350px' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  In the symphony of life, a music concert is where the heart finds its rhythm, and the soul dances to the melody of shared emotions.
                </p>
                <Link to='/EventInfo' className="btn btn-primary me-3">More Info</Link>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#BuyTicketsModal">Buy Tickets</button>
              </div>
            </div>
          </div>
          <div className="col Event-hover">
            <div className="card shadow" style={{ width: "280px", height: "600px" }}>
              <img src={image4} className="card-img-top" alt="..." style={{ height: '350px' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  In the symphony of life, a music concert is where the heart finds its rhythm, and the soul dances to the melody of shared emotions.
                </p>
                <Link to='/EventInfo' className="btn btn-primary me-3">More Info</Link>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#BuyTicketsModal">Buy Tickets</button>
              </div>
            </div>
          </div>
          <div className="col Event-hover">
            <div className="card shadow" style={{ width: "280px", height: "600px" }}>
              <img src={image5} className="card-img-top" alt="..." style={{ height: '350px' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  In the symphony of life, a music concert is where the heart finds its rhythm, and the soul dances to the melody of shared emotions.
                </p>
                <Link to='/EventInfo' className="btn btn-primary me-3">More Info</Link>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#BuyTicketsModal">Buy Tickets</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="BuyTicketsModal" tabIndex="-1" aria-labelledby="BuyTicketsModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form className='BuyTicketsForm'>
              <h1 className="h3 mb-3 fw-normal" id="BuyTicketsModalLabel">Please Fill In The Details</h1>
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" data-temp-mail-org="0" />
                <label htmlFor="EmailAddress">Email address</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control" id="Name" placeholder="Name" />
                <label htmlFor="BuyerName">Name</label>
              </div>
              <div className="form-floating">
                <input type="number" className="form-control" id="NoOfTickets" placeholder="Tickets" />
                <label htmlFor="NoOfTickets">No of Tickets</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control" id="BuyerAddress" placeholder="Your Address" />
                <label htmlFor="BuyerAddress">Address</label>
              </div>
              {/* <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div> */}
              <button className="btn btn-primary w-100 py-2" type="submit">Buy Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}