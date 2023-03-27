import React from 'react';

function Filter({ filter, onFilterChange }) {
  return (
    <label>
      Filter by name
      <input type="text" value={filter} onChange={onFilterChange} />
    </label>
  );
}

export default Filter;
