import React , { useState, useEffect } from 'react';
import { getEpisodesByServer } from '../../../Fetch/getInfoByServer';
import { Form, Table } from 'react-bootstrap';
import './EpisodesList.scss';
import { episodesListTypes } from '../../../../types/Episodes/EpisodesType';
import { EpisodeListTable } from '../EpisodesListTable/EpisodeListTable';
import { useSelector } from 'react-redux';

export const EpisodesList = () => {
  const [episodesList,setEpisodesList] = useState<episodesListTypes[]>([]);
  const [inputName,setInputName] = useState('');
  const hideShowForm = useSelector((item:any) => {
    console.log(item.episodeReducer.show);
    return item.episodeReducer.show;
  });
  useEffect(()=> {
    getEpisodesByServer(setEpisodesList);
  },[]);

  const filterByName = (array:episodesListTypes[]) => {
    if(array && inputName.length) {
      return array.filter(item => (
        item.name.toLowerCase().includes(inputName.toLowerCase())));
    }
    return array;
  }

  return (
      <div className={"Episodes__container"}>
        <div className="Episodes__container-title">
            <h2>Episodes:</h2>
        </div>
        {  hideShowForm &&
          <Form.Control
            className={"Episodes__container-filter"}
            onChange={({target}) => setInputName(target.value)}
            value={inputName}
            placeholder="filter by names"
          />
        }
        <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>Air date</th>
            <th>Url episode</th>
          </tr>
        </thead>
          {filterByName(episodesList).map(item => (
            <EpisodeListTable key={item.id} item={item}/>
          ))}
        </Table>
      </div>
  );
} 