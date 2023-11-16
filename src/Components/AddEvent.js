import './style.css'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

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

export default function AddEvent() {

    // const userID = useGetUserID();
    const [cookies, _] = useCookies(["access_token"]);

    const [events, setEvent] = useState({
        // SNo: '',
        eventname: '',
        genre: ' ',
        description: '',
        // imageUrl: ' ',
        SeatsCapacity: ''
        // userOwner: userID,
    });

    const [allevents, setAllEvents] = useState(LocalStorageEventCards());

    const addevents = () => {
        if (!events.eventname) {

        }
        else {
            setAllEvents([...allevents, events]);
        }

    }

    useEffect(() => {
        localStorage.setItem('AllEventCards', JSON.stringify(allevents))
    }, [allevents]);

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

    // const [ImageUpload, setImageUpload] = useState('');
    // const [ImagePreview, setImagePreview] = useState('');

    // useEffect(() => {
    //     if (!ImageUpload) return;

    //     let tmp = [];
    //     for (let i = 0; i < ImageUpload.length; i++) {
    //         tmp.push(URL.createObjectURL(ImageUpload[i]));
    //     }

    //     const ObjectURLS = tmp;
    //     setImagePreview(ObjectURLS);
    //     for (let i = 0; i < ObjectURLS.length; i++) {
    //         return () => {
    //             URL.revokeObjectURL(ObjectURLS[i]);
    //         }
    //     }
    // }, [ImageUpload]);

    return (
        <>
            <div className="my-5">
                <h2 className="text-center">Add Event</h2>
                <form className="text-center" onSubmit={handleSubmit}>
                    <div className="row AddEvent-Sub">
                        <div className="col-6">
                            <label htmlFor="EventName" className="form-label">Event Name</label>
                            <input type="text" className="form-control" id="eventname" value={events.eventname} onChange={(event) => setEvent({ ...events, eventname: event.target.value })} placeholder="" required="" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="Genre" className="form-label">Genre</label>
                            <input type="text" className="form-control" id="genre" value={events.genre} onChange={(event) => setEvent({ ...events, genre: event.target.value })} placeholder="" required="" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="Description" className="form-label">Description</label>
                            <input type="Description" className="form-control" id="Description" value={events.description} onChange={(event) => setEvent({ ...events, description: event.target.value })} placeholder="" data-temp-mail-org="0" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="Seats Capacity" className="form-label">Seats Capacity</label>
                            <div className="input-group has-validation">
                                <input type="number" className="form-control" id="SeatsCapacity" value={events.SeatsCapacity} onChange={(event) => setEvent({ ...events, SeatsCapacity: event.target.value })} placeholder="" required="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="time" className="form-label">Time</label>
                            <div className="input-group has-validation">
                                <input type="time" className="form-control" id="time" placeholder="" required="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="Owner" className="form-label">Owner</label>
                            <input type="Owner" className="form-control" id="Owner" placeholder="" data-temp-mail-org="0" />
                        </div>
                        {/* <div className="col-6">
                            <label htmlFor="EventImage" className="form-label">EventImage</label>
                            <div className="input-group has-validation">
                                <input type="file" className="form-control" id="imageUrl" value={events.imageUrl} onChange={(event) => setEvent({ ...events, imageUrl: event.target.value })} placeholder="" alt='...' />
                            </div>
                            <div className="input-group has-validation">
                                <input type="file" className="form-control" id="ImageUpload" onChange={(event) => setImageUpload(event.target.files)} placeholder="" alt='...' />
                                {ImagePreview && ImagePreview.map((picture) => { return <img src={picture} alt='...' /> })}
                            </div>
                        </div> */}
                    </div>
                    <button className="btn btn-primary w-50 my-3" type="submit" onClick={addevents} >Submit<i className="fa-solid fa-arrow-right fa-xl ms-3"></i></button>
                </form>
            </div>
        </>
    )

}