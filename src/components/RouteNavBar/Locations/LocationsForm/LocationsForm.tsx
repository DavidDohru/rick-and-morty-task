import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { locationsFormTypes } from '../../../../types/Locations/LocationsTypes';

export const LocationsForm = (
  {
    name,
    setName,
    setType,
    dimension,
    setDimension,
    type,
  }:locationsFormTypes) => {
    const hideShowForm = useSelector((item:any) => {
      console.log(item.locationReducer.show);
      return item.locationReducer.show;
    });
  return (
    <>
      {hideShowForm &&
      <div className="Locations__container-form">
        <Form.Control 
          placeholder="filter by names"
          value={name}
          onChange={({target}) => setName(target.value)}
        />
        <Form.Control 
          placeholder="filter by types"
          value={type}
          onChange={({target}) => setType(target.value)}
        />
        <Form.Control 
          placeholder="filter by dimensions"
          value={dimension}
          onChange={({target}) => setDimension(target.value)}
        />
      </div>}
    </>
  );
} 