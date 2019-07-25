import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";

export interface IClickerState {
    clicks: number
};

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    clicker: IClickerState
}

export const state = combineReducers<IState>({
    clicker: clickerReducer
})