import React ,{ useState, useEffect }from 'react';
import { Button, Form, CloseButton } from 'react-bootstrap';
import {Route} from 'react-router-dom';
import './MyWatchList.scss';
import { useSelector } from 'react-redux';
import { 
  addToLocaleStorage,
  removeCheckedfromLocaleStorage,
  removeListfromLocaleStorage,
} from '../FunctionForLocaleStorage/FunctionForLocaleStorage';

if (!JSON.parse(localStorage.getItem('array')!)) {
  localStorage.setItem('array',JSON.stringify([]));
}
if (!JSON.parse(localStorage.getItem('checked')!)) {
  localStorage.setItem('checked',JSON.stringify([]));
}
export const MyWatchList = () => {
  const hideShowForm = useSelector((item:any) => item.myWatchListReducer.show);
  const [isValidInput,setIsValidInput] = useState<number|boolean>(0);
  const [nameEpisode , setNameEpisode] = useState('');
  const [clickAdd , setClickAdd] = useState(0);
  const [watchList , setWatchList] = useState(JSON.parse(localStorage.getItem('array')!)||[]);
  const [checked,setChecked] = useState(JSON.parse(localStorage.getItem('checked')!)||[]);
  
  useEffect(()=> {
    setWatchList(JSON.parse(localStorage.getItem('array')!));
  },[clickAdd]);


  return(
    <Route path="/My_watch_list">
    <div className="MyWatchList__container">
      {watchList.length > 0 && <div className="MyWatchList__container-title">
        <h2>My watch list :</h2>
      </div>}
      {hideShowForm &&
      <div className="is_valid">
        <Form.Control
          isInvalid={isValidInput === false}
          isValid={isValidInput === true}
          value={nameEpisode}
          onChange={({target}) => {
            if(target.value.length > 0) {
              setIsValidInput(true);
            } else if (target.value.length <= 0) {
              setIsValidInput(false);
            }
              setNameEpisode(target.value);
          }}
          placeholder="Write down a new episode to watch later"
        />
       <div className="is_valid-text">{isValidInput === false && 'Empty , min length = 1'}</div>
       </div>
      }
      {(watchList.length > 0) && 
        <ul className="MyWatchList__container-list_all">
        {watchList.map((item:{id:number,name:string}) => (
          <li className="MyWatchList__container-list" key={item.id}>
            <Form.Check
              checked={JSON.parse(localStorage.getItem('checked')!).includes(item.id)}
              value={checked}
              onChange={() => setChecked((prev:any[]):any[] => {
                if(!prev.includes(item.id)) {
                  addToLocaleStorage(item.id,'checked', checked);
                  return [...prev,item.id];
                } else {
                  removeCheckedfromLocaleStorage(item.id,'checked',checked);
                  return prev.filter((value:any):any=> value !== item.id);
                }
              })}
            />
            <div className={checked.includes(item.id)? 'checked' : 'unChecked'}>{item.name}</div>
            <CloseButton
              className="MyWatchList__container-button_close"
              onClick={()=> {
              setClickAdd(prev => prev + 1);
              removeListfromLocaleStorage(item.id,'array',watchList);
              removeCheckedfromLocaleStorage(item.id,'checked',checked);
            }}/>
          </li>
        ))}
      </ul>
      }
      {hideShowForm && 
      <Button 
        onClick={()=> {
        if (nameEpisode.length) {
          const listDate = {name: nameEpisode,id:new Date().toLocaleString()}
          setWatchList((prev:any[]):any[] => ([...prev,listDate]));
          addToLocaleStorage(listDate,'array', watchList);
          setNameEpisode('');
          setIsValidInput(0);
        } else {
          setClickAdd(prev => prev + 1);
          setIsValidInput(false);
        }
      }}>
        Add new episode
      </Button>}
      {watchList.length <= 0 && (
      <div>
        <div className="MyWatchList__container_empty">
          <h3 className="MyWatchList__container_empty-title">Your list is empty ...</h3>
        </div>
      </div>
      )}
    </div>
    </Route>
  )
}
