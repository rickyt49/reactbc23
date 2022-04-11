import { combineReducers, createStore } from "redux";
import { gameXucXacReducer } from "./reducers/gameXucXacReducer";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { stateNumber } from "./reducers/numberReducer";
import { stateImgCar } from "./reducers/stateImgCarReducer";

const rootReducer = combineReducers({
  //Các state dự án đc khai báo tại đây
  stateNumber: stateNumber,
  stateImgCar: stateImgCar,
  gioHangReducer: gioHangReducer,
  gameXucXacReducer: gameXucXacReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
