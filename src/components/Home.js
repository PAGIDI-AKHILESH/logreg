import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  { id: 1, title: 'IEEE Skill Development Workshop for Beginners', date: '2024-12-12', location: 'Online ' },
  { id: 2, title: 'Hack4Good Beginner Hackathon', date: '2024-12-15 to 2024-12-16', location: 'Hyderabad,India' },
  { id: 3, title: 'Introduction to Web Development Workshop', date: '2024-12-14', location: 'Online' },
];

function Home() {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`} state={{ event }}>
              {event.title} - {event.date} - {event.location}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
