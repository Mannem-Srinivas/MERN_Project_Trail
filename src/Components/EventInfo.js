import './style.css'
 import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import EventInfoImage from './Images/EventInfoImage.webp'

const LocalStorageEventCards = () => {
  let AllEventCard = localStorage.getItem('AllEventCards');
  if (AllEventCard) {
    return (
      JSON.parse(localStorage.getItem('AllEventCards'))
    )
  }
  else {
    return [];
  }
}

export default function EventInfo() {

  // eslint-disable-next-line
  const [allevents, setAllEvents] = useState(LocalStorageEventCards());

  return (
    <EventInfoFunction EventsDetails={allevents} />
  )
}

function EventInfoFunction({ EventsDetails = [{}] }) {

  const [Buyer, SetBuyer] = useState({
    BuyerEmail: ' ',
    BuyerName: ' ',
    BuyerAddress: ' ',
    NoOfTickets: ' '
  });


  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await axios.post(
  //       "http://localhost:3001/bookings",
  //       { ...Buyer},
  //       // {
  //       //   headers: { authorization: cookies.access_token },
  //       // }
  //     );
  //     alert("Bought Tickets");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/bookings",
        { ...Buyer},
        // {
        //   headers: { authorization: cookies.access_token },
        // }
      );
      alert("Bought Tickets");
    } catch (error) {
      console.error(error);
    }
};

  return (
    <>
      {
        EventsDetails.map((Element, idx) => {
          return (
            <div className='EventsInfo' key={idx}>
              <div>
                <img src={EventInfoImage} style={{ height: '600px', width: '600px', objectFit: 'cover' }} alt='...' />
              </div>
              <div className='Info'>
                <div className='Info-Sub'>Name: <div className='Info-Details'>{Element.eventname}</div></div>
                <div className='Info-Sub'>Genre: <div className='Info-Details'>{Element.genre}</div></div>
                <div className='Info-Sub'>Description: <div className='Info-Details'>{Element.description}</div></div>
                <div className='Info-Sub'>Time: <div className='Info-Details'>6:00 PM to 12:00 PM</div></div>
                <div className='Info-Sub'>Total Seats: <div className='Info-Details'>No One Will Come</div></div>
                <div className='mt-5 d-flex justify-content-between'>
                  <Link to="/" className="btn btn-primary d-flex justify-content-center align-items-center" style={{ height: '40px', width: '100px' }}>
                    Go Back
                  </Link>
                  <button type="button" className="btn btn-primary d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#BuyTicketsModal" style={{ height: '40px', width: '120px' }}>
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          )
        })
      }
      {/* <div className='EventsInfo'>
        <div>
          <img src={EventInfoImage} style={{ height: '600px', width: '600px', objectFit: 'cover' }} alt='...' /></div>
        <div className='Info'>
          <div className='Info-Sub'>Name: <div className='Info-Details'>Dancer Manem Puli</div></div>
          <div className='Info-Sub'>Description: <div className='Info-Details'>Hell Dancer</div></div>
          <div className='Info-Sub'>Genre: <div className='Info-Details'>Hip-Hop Dance</div></div>
          <div className='Info-Sub'>Time: <div className='Info-Details'>6:00 PM to 12:00 PM</div></div>
          <div className='Info-Sub'>Total Seats: <div className='Info-Details'>No One Will Come</div></div>
          <div className='mt-5 d-flex justify-content-between'>
            <Link to="/" className="btn btn-primary d-flex justify-content-center align-items-center" style={{ height: '40px', width: '100px' }}>
              Go Back
            </Link>
            <button type="button" className="btn btn-primary d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#BuyTicketsModal" style={{ height: '40px', width: '120px' }}>
              Buy Tickets
            </button>
          </div>
        </div> */}
      <div className="modal fade" id="BuyTicketsModal" tabIndex="-1" aria-labelledby="BuyTicketsModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form className='BuyTicketsForm' onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 fw-normal" id="BuyTicketsModalLabel">Please Fill In The Details</h1>
              <div className="form-floating">
                <input type="email" className="form-control" id="BuyerEmail" value={Buyer.BuyerEmail} onChange={(event) => SetBuyer({ ...Buyer, BuyerEmail: event.target.value })} placeholder="name@example.com" data-temp-mail-org="0" />
                <label htmlFor="EmailAddress">Email address</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control" id="Name" value={Buyer.BuyerName} onChange={(event) => SetBuyer({ ...Buyer, BuyerName: event.target.value })} placeholder="Name" />
                <label htmlFor="BuyerName">Name</label>
              </div>
              <div className="form-floating">
                <input type="number" className="form-control" id="NoOfTickets" value={Buyer.NoOfTickets} onChange={(event) => SetBuyer({ ...Buyer, NoOfTickets: event.target.value })} placeholder="Tickets" />
                <label htmlFor="NoOfTickets">No of Tickets</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control" id="BuyerAddress" value={Buyer.BuyerAddress} onChange={(event) => SetBuyer({ ...Buyer, BuyerAddress: event.target.value })} placeholder="Your Address" />
                <label htmlFor="BuyerAddress">Address</label>
              </div>
              <button className="btn btn-primary w-100 py-2" type="submit">Buy Now</button>
            </form>
          </div>
        </div>
      </div>
      {/* </div > */}
    </>
  )
}