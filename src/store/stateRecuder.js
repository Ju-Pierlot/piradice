import {loginToFirebase, logout} from '../firebase';
const initialState = () => {
      if(sessionStorage.getItem('game') !== null){
        let game = JSON.parse(sessionStorage.getItem('game'));
        return game;
      } else {
          return {game_id: null, player_id: null};
      }
    };
export const GENERATE_GAME_ACTION= 'GENERATE_GAME_ACTION';
export const DISCONNECT_ACTION = 'DISCONNECT_ACTION';


export function StateReducer(state = initialState(), action){
    switch (action.type) {
        case GENERATE_GAME_ACTION:
            sessionStorage.setItem('game', JSON.stringify(action.payload));
            loginToFirebase();
            return {...action.payload};
        case DISCONNECT_ACTION:
            sessionStorage.clear();
            logout();
            return {
                game_id: null
            }
        default:
            return state;
    }
}