import axios from 'axios';
import { characters, locations, episodes } from './fetchAllUrl';

export const getCharactersByServer = async(setState:any) => {
  try {
    const allCharacters = await axios.get(characters);
    setState(allCharacters.data);
  }
  catch (err) {
    alert (err);
  }
};

export const getLocationsByServer = async(setState:any) => {
  try {
    const allLocation = await axios.get(locations);
    setState(allLocation.data);
  }
  catch (err) {
    alert (err);
  }
}

export const getEpisodesByServer = async(setState:any) => {
  try {
    const allEpisodes = await axios.get(episodes);
    setState(allEpisodes.data);
  }
  catch (err) {
    alert (err);
  }
}



