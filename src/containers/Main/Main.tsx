import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ToDo from './components/ToDo';
import './Main.scss';

interface _ToDo {    
  "userId": number;
  "id": number;
  "title": string;
  "completed": boolean;
}

interface Props {
    toDoList? :_ToDo[];
}

const Main: React.FC<Props> =({toDoList})=>{
    
    return(
        <table className="todo-table">
            <thead className="todo-table-head">
                <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>User</th>
                    <th>Completed</th>
                </tr>
            </thead>
           <tbody className="todo-table-body">{
                toDoList && toDoList.map((toDo, i)=>{
                    return <ToDo
                            key={`${i}-${toDo.title}`} 
                            userId={toDo.userId}
                            id={toDo.id}
                            title={toDo.title}
                            completed={toDo.completed}
                            ></ToDo>
                })
            }</tbody>
        </table>
    );
}

const mapStateToProps = (state) =>{
    return {
        toDoList: state
    }
}

export default connect(mapStateToProps)(Main);