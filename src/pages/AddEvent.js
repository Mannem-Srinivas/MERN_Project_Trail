
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useGetUserID } from '../hooks/useGetUserID';
export default function AddEvent() {


  return (
    <div>
      <AddingEvent />
    </div>
  );


}

const AddingEvent = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [events, setEvent] = useState({
    eventname: "",
    genre: "",
    imageUrl: "",
    SeatsCapacity: 0,
    time: ""
    // userOwner: userID,
  });

  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/events",
        { ...events },
        {
          headers: { authorization: cookies.access_token },
        }
      );
     


      alert("Event Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="my-5">
      <h2 className="text-center">Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="row AddEvent-Sub">
          <div className="col-6">
            <label htmlFor="EventName" className="form-label">Event Name</label>
            <input type="text" className="form-control" id="eventname" value={events.eventname} onChange={(event) => setEvent({ ...events, eventname: event.target.value })}
              placeholder="" required="" />
          </div>
          <div className="col-6">
            <label htmlFor="Genre" className="form-label">Genre</label>
            <input type="text" className="form-control" id="genre" value={events.genre} onChange={(event) => setEvent({ ...events, genre: event.target.value })} placeholder="" required="" />
          </div>
          <div className="col-6">
            <label htmlFor="Seats Capacity" className="form-label">Seats Capacity</label>
            <div className="input-group has-validation">
              <input type="number" className="form-control" id="SeatsCapacity" value={events.SeatsCapacity} onChange={(event) => setEvent({ ...events, SeatsCapacity: event.target.value })} placeholder="" required="" />
            </div>
          </div>
          {/* <div className="col-6">
                        <label htmlFor="time" className="form-label">Time</label>
                        <div className="input-group has-validation">
                            <input type="string" className="form-control" id="time" placeholder="" required="" />
                        </div>
                    </div> */}
          <div className="col-6">
            <label htmlFor="time" className="form-label">Time</label>
            <div className="input-group has-validation">
              <input
                type="time"
                className="form-control"
                id="time"
                value={events.time}
                onChange={(event) => setEvent({ ...events, time: event.target.value })}
                placeholder=""
                required=""
              />
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="EventImage" className="form-label">EventImage</label>
            <div className="input-group has-validation">
              <input type="string" className="form-control" id="imageURL" value={events.imageURL} onChange={(event) => setEvent({ ...events, imageURL: event.target.value })} placeholder="" alt='...' />
            </div>
          </div>

        </div>
        <button className="btn btn-primary w-50 my-3" type="submit">Submit</button>
      </form>
    </div>
  )
}