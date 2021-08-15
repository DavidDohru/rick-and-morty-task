import React from 'react';
import { CharactersList } from '../Characters/CharactersList/Charactesrs';
import { EpisodesList } from '../Episodes/EpisodesList/EpisodesList';
import { LocationsList } from '../Locations/LocationsList/LocationsList';
import { MyWatchList } from '../MyWatchList/MyList/MyWatchList';

export const NavigationBarRoute = () => {
  return (
    <>
      <EpisodesList/>
      <CharactersList/>
      <LocationsList/>
      <MyWatchList/>
    </>
  )
}