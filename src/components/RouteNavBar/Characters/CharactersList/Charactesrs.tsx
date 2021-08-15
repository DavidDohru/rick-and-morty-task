import React,{ useEffect,useState } from 'react';
import { getCharactersByServer } from '../../../Fetch/getInfoByServer';
import './Characters.scss';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { CharacterListForm } from '../CharacterListForm/CharacterListForm';

export const CharactersList = () => {
  const [characters,setCharacters] = useState<any[]>([]);
  const [species,setSpecies] = useState('Both');
  const [status, setStatus] = useState('Both');
  const [gender, setGender] = useState('Both');

  const checkSpecies = (array:{species: string}[]): any[] => {
    if (array.length && species === "Both") {
      return array;
    }
    if(array.length && (species === "Human" || species === "Alien")) {
      return array.filter(item => item.species === species)
    }
    return array;
  }
  const checkStatus = (array:{status:string}[]): any[] => {
    if (array.length && status === "Both") {
      return array;
    }
    if(array.length && (status === "Dead" || status === "Alive" || "unknown")) {
      return array.filter(item => item.status === status)
    }
    return array;
  }

  const checkGender = (array:{gender:string}[]): any[] => {
    if (array.length && gender === "Both") {
      return array;
    }
    if(array.length && (gender === "Male"|| gender === "Female")) {
      return array.filter(item => item.gender === gender)
    }
    return array;
  }

  useEffect(() => {
    getCharactersByServer(setCharacters)
  },[]);

  return (
      <div className="RouteCharacters">
        <div className="RouteCharacters__container_title">
          <h2>List of Characters</h2>
        </div>
        <CharacterListForm 
          setSpecies={setSpecies}
          setGender={setGender}
          setStatus={setStatus}
        />
        <div className="RouteCharacters__container">
          {checkGender(checkStatus(checkSpecies(characters))).map(character => (
            <CharacterCard key={character.id} character={character}/>
          ))}
        </div>
      </div>
  );
} 