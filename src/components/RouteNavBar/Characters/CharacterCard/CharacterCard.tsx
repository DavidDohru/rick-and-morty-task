import React from 'react';
import { useState } from 'react';
import { characterTypes } from '../../../../types/Fetch/Characters';
import { PersonCardPopup } from '../PersonCardPopup/PersonCardPopup';

export const CharacterCard = ({character}:characterTypes) => {
  const [show, setShow] = useState(false);

  return (
<React.Fragment>
  <div
    onClick={() => setShow(true)}
    className="RouteCharacters__container-characters"
  >
    <h3>{character.name}</h3>
    <img 
      alt={character.name}
      src={character.image}
    />
    <p
      className="RouteCharacters__container-characters_gender"
    >
      Gender: {character.gender}
    </p>
    <p
       className="RouteCharacters__container-characters_species"
    >
      Species: {character.species}
    </p>
    <p
      className={`${character.status === "Alive" ? "alive__status" : "dead__status"}`}
    >
      Status: {character.status}
    </p>
  </div>
  <PersonCardPopup 
    show={show}
    setShow={setShow}
    character={character}
  />
</ React.Fragment>
  )
}