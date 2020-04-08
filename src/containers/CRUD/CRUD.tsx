import React, {useState} from 'react';
import {connect} from 'react-redux';
import {searchTodo} from '../../actions';
import './CRUD.scss';


const CRUD = ({searchTodo})=>{
    const [filter, setFilter] =useState<undefined|string>(undefined);
    const [content, setContent]=useState<string>();
    const [searchBy, setSearchBy]=useState<string>("");

     const submitSearch = ()=>{
        if (content === undefined) {
            searchTodo(searchBy,content);    
        }else {
            searchTodo(searchBy,content,filter);
        }
     }
     
    return(
        <div className="actions">
            <select name="param" onChange={e=>{setSearchBy(e.target.value)}}>
                <option value="id"> ID </option>
                <option value="user-id"> User ID </option>
            </select>
            <input type="text" onChange={e=>{setContent(e.target.value)}}/>
            <div id="todo-completed-filter">
                <input name="filter" type="radio" value="all" checked onChange={e=>{setFilter(undefined)}}/> Todas
                <input name="filter" type="radio" value="true" onChange={e=>{setFilter(e.target.value)}}/> Completadas
                <input name="filter" type="radio" value="false" onChange={e=>{setFilter(e.target.value)}}/> Pendientes
            </div>
            <button type="button" onClick={submitSearch}>Ok!</button>
            
        </div>
    );
}

const mapDispatchToProps = dispatch =>{
    return{
        searchTodo: (idtype,content,state) => dispatch(searchTodo(idtype,content,state))
    }
}

export default connect(null, mapDispatchToProps)(CRUD);

