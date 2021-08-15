import { defaultStateType } from '../../types/Characters/ReducerTypes';
 
const OPEN = "EPISODE/OPEN";

const defaultState : defaultStateType = {
  show:false,
}
export const reducer = (state:defaultStateType=defaultState,action:{type:string}) => {
  switch(action.type) {
    case OPEN :
      return {show: !state.show}
    default :
      return state;
  }
}