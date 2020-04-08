import {all, put, call, takeLatest} from 'redux-saga/effects';
import {setTodos} from '../actions';
import Axios from 'axios';

export const APIurl: String = "https://jsonplaceholder.typicode.com";

interface ToDo {
    userId: number;
    id: number;
    title: String;
    completed: boolean;
}

export function* watchGetAllTodos() {
    yield takeLatest("GET_TODO_LIST", getAllTodos)
}

export function* getAllTodos(){
    const res = yield call(Axios.get, `${APIurl}/todos`);
    console.log(res);
    yield put(setTodos(res.data))
}

export function* watchSearchTodo() {
    yield takeLatest("SEARCH_TODO", searchTodo)
}

export function* searchTodo(action){
    const res = yield call(Axios.get, `${APIurl}/todos?${action.param}${action.state}`);
    console.log(res.data);
    yield put(setTodos(res.data));
}

export function* rootSaga(): Generator{
    yield all([
        watchGetAllTodos(),
        watchSearchTodo()
    ])

};
export default {
   rootSaga 
}