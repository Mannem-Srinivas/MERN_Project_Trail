import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const AvailableEvents = () => {
  const [savedEvents, setSavedEvents] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedEvents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/events/userRegisteredEvent/${userID}`
        );
        setSavedEvents(response.data.userRegisteredEvent);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedEvents();
  }, []);
  return (
    <div>
      <h1>Saved Events</h1>
      <ul>
        {availableEvents.map((events) => (
          <li key={events._id}>
            <div>
              <h2>{events.eventname}</h2>
            </div>
            <p>{events.genre}</p>
            <img src={events.imageURL} alt={events.eventname} />
            <p>Seats Available: {events.SeatsAvailable} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};