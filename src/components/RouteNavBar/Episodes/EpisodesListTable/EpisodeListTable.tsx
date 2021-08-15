import React from 'react';
import { episodesListTypes } from '../../../../types/Episodes/EpisodesType';

interface list {
  item:episodesListTypes;
}
export const EpisodeListTable = ({item}:list) => {
  return (
  <tbody key={item.id}>
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.air_date}</td>
      <td>{item.url}</td>
    </tr>
  </tbody>
  );
}