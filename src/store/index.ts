import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware, { Saga } from 'redux-saga';
import reducer from '../reducers';
import {rootSaga} from '../sagas';
interface _ToDo {    
    "userId": number;
    "id": number;
    "title": string;
    "completed": boolean;
  }
  
  interface ToDoList {
      toDoList? :_ToDo[];
  }
  
const initialState=[];

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    reducer,
    initialState as any,
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga as Saga<any[]>)

export default store;