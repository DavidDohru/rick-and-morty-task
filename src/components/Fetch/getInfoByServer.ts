import axios from 'axios';
import { characters, locations, episodes } from './fetchAllUrl';

export const getCharactersByServer = async(setState:(a:any) => void) => {
  try {
    const allCharacters = await axios.get(characters);
    setState(allCharacters.data.results);
  }
  catch (err) {
    alert (err);
  }
};

export const getLocationsByServer = async(setState:(a:any) => void) => {
  try {
    const allLocation = await axios.get(locations);
    setState(allLocation.data.results);
  }
  catch (err) {
    alert (err);
  }
}

export const getEpisodesByServer = async(setState:(a:any) => void) => {
  try {
    const allEpisodes = await axios.get(episodes);
    setState(allEpisodes.data.results);
  }
  catch (err) {
    alert (err);
  }
}



