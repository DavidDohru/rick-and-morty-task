import React from 'react';
import { useSelector } from 'react-redux';

export const CharacterListForm = ({setStatus,setSpecies,setGender}:any) => {
  const hideShowForm = useSelector((item:any) => item.characterReducer.show);
  return (
    <>
    {
        hideShowForm && (
          <div className="RouteCharacters__container-input">
        Species:<select
          onChange={(e)=>{
            setSpecies(e.target.value);
          }}
          className="RouteCharacters__container-input_species" 
          placeholder="filter by gender"
        >
          <option value="Both">Both</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
        Status:<select
          onChange={(e)=>{
            setStatus(e.target.value);
          }}
          className="RouteCharacters__container-input_species" 
          placeholder="filter by gender"
        >
          <option value="Both">All</option>
          <option value="Dead">Dead</option>
          <option value="Alive">Alive</option>
          <option value="unknown">unknown</option>
        </select>
        Gender:<select
          onChange={(e)=>{
            setGender(e.target.value);
          }}
          className="RouteCharacters__container-input_species" 
          placeholder="filter by gender"
        >
          <option value="Both">Both</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
        )
      }
  </>
  );
}