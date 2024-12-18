// src/components/EventCategory.js import React from 'react';
const EventCategory = ({ category, events }) => { return (
    <div>
    <h2>{category}</h2>
    <ul>
    {events.map((event, index) => (
    <li key={index}>
    <h3>{event.title}</h3>
    <p>{event.description}</p>
    </li>
    ))}
    </ul>
    </div>
    );
    };
    export default EventCategory;
    