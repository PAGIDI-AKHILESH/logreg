import React from 'react';

function EventFilter({ filters, onFilterChange, onClearFilters }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div>
      <h3>Filter Events</h3>
      <div>
        <label>Date: </label>
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Category: </label>
        <select name="category" value={filters.category} onChange={handleInputChange}>
          <option value="">All</option>
          <option value="Workshop">Workshop</option>
          <option value="Conference">Conference</option>
          <option value="Bootcamp">Bootcamp</option>
          <option value="Seminar">Seminar</option>
        </select>
      </div>
      <div>
        <label>Location: </label>
        <select name="location" value={filters.location} onChange={handleInputChange}>
          <option value="">All</option>
          <option value="Online">Online</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>
      <button onClick={onClearFilters}>Clear Filters</button>
    </div>
  );
}

export default EventFilter;
