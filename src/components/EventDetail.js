import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EventDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  if (!event) {
    return (
      <div>
        <p>Event not found! Redirecting back to events.</p>
        <button onClick={() => navigate('/')}>Go to Events</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <button onClick={() => navigate('/')}>Back to Events</button>
    </div>
  );
}

export default EventDetail;
