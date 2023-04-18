import React from 'react';
import { Label, Input } from './Filter.styled';

function Filter({ filter, onFilterChange }) {
  return (
    <Label>
      Filter by name
      <Input type="text" value={filter} onChange={onFilterChange} />
    </Label>
  );
}

export default Filter;
