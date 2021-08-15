import React from 'react';
import { CharactersList } from '../Characters/CharactersList/Charactesrs';
import { Route ,Switch} from 'react-router-dom';
import { EpisodesList } from '../Episodes/EpisodesList/EpisodesList';
import { LocationsList } from '../Locations/LocationsList/LocationsList';
import { MyWatchList } from '../MyWatchList/MyList/MyWatchList';

export const NavigationBarRoute = () => {
  return (
      <Switch>
        <Route path="/Episodes" exact>
          <EpisodesList/>
        </Route>
        <Route path="/Locations" exact>
          <LocationsList/>
        </Route>
        <Route path="/My_watch_list" exact>
          <MyWatchList/>
        </Route>
        <Route path="/" exact>
          <CharactersList/>
        </Route>
      </Switch>
  )
}