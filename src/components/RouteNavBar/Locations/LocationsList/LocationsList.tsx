import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { getLocationsByServer } from '../../../Fetch/getInfoByServer';
import './LocationsList.scss';
import { locationsTypes } from '../../../../types/Locations/LocationsTypes';
import { LocationsForm } from '../LocationsForm/LocationsForm';
export const LocationsList = () => {
  const [name,setName] = useState('');
  const [type,setType] = useState('');
  const [dimension,setDimension] = useState('');
  const [locations,setLocations] = useState<locationsTypes[]>([]);

  useEffect(()=> {
    getLocationsByServer(setLocations);
  },[]);

  const filterByNames = (array: locationsTypes[]) => {
    if (array.length && name.length) {
      return array.filter(item => (
        item.name.toLowerCase().includes(name.toLowerCase())));
    }

    return array;
  }

  const filterByType = (array:locationsTypes[]) => {
    if (array.length && type.length) {
      return array.filter(item => (
        item.type.toLowerCase().includes(type.toLowerCase())));
    }

    return array;
  }

  const filterByDimension = (array:locationsTypes[]) => {
    if (array.length && dimension.length) {
      return array.filter(item => (
        item.dimension.toLowerCase().includes(dimension.toLowerCase())));
    }

    return array;
  }


  return (
    <div className="Locations__container">
      <div className="Locations__container-title">
        <h2>Locations</h2>
        </div>
        <LocationsForm 
          name={name}
          setName={setName}
          type={type}
          setType={setType}
          dimension={dimension}
          setDimension={setDimension}
        />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Dimension</th>
            </tr>
            </thead>
            <tbody>
            {filterByDimension(filterByType(filterByNames(locations))).map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.dimension}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  );
}