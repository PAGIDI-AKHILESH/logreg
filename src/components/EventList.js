import React from 'react';

function EventList({ events }) {
  if (events.length === 0) {
    return <p>No events match the selected filters.</p>;
  }

  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Category: {event.category}</p>
          <p>Location: {event.location}</p>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
