import React, {useState} from 'react';
import {connect} from 'react-redux';
import {searchTodo} from '../../actions';
import './CRUD.scss';


const CRUD = ({searchTodo})=>{
    const [content, setContent]=useState<string>();
    const [searchBy, setSearchBy]=useState<string>();
    const [showFilters, setShowFilters]=useState<boolean>(true);
    const [showInput, setShowInput]=useState<boolean>(true);
    const [filter, setFilter] =useState<undefined|string>(undefined);

     const submitSearch = ()=>{
        if (filter === undefined) {
            searchTodo(searchBy,content);    
        }else if(searchBy === "all") {
            searchTodo("completed",filter)
        }
        else {
            searchTodo(searchBy,content,filter);
        }
     }
     const showNotShow= (selectValue) => {
        switch (selectValue) {
            case "id":
                setShowFilters(false);
                setShowInput(true);
                break
            case "all":
                setShowFilters(true);
                setShowInput(false);
                break
            case "userId":
            default:
                setShowFilters(true);
                setShowInput(true);
        }
     }
    return(
        <div className="actions">
            <select name="param" onChange={e=>{ showNotShow(e.target.value)
                                                setSearchBy(e.target.value)}}>
                <option>Search by...</option>
                <option value="id"> ID </option>
                <option value="userId"> User ID </option>
                <option value="all"> All </option>
            </select>
            {showInput? <input type="text" onChange={e=>{setContent(e.target.value)}}/>:null}
           {showFilters? <div id="todo-completed-filter">
                <input name="filter" type="radio" value="all" onChange={e=>{setFilter(undefined)}}/> Todas
                <input name="filter" type="radio" value="true" onChange={e=>{setFilter(e.target.value)}}/> Completadas
                <input name="filter" type="radio" value="false" onChange={e=>{setFilter(e.target.value)}}/> Pendientes
            </div> : null}
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

