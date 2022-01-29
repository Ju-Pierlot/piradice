import { DISCONNECT_ACTION, GENERATE_GAME_ACTION } from "./stateRecuder";

export const generateStateAction = (state) => ({
    type: GENERATE_GAME_ACTION,
    payload: state
});
export const disconnectStateAction = (state) => ({
    type: DISCONNECT_ACTION,
    payload: {userInfo: null, token: null}
});