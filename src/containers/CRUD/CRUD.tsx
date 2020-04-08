import React, {useState} from 'react';
import './CRUD.scss';
const CRUD = ()=>{
    const [showInput, setShowInput]=useState(true);  
    const toggleInput =(value)=>{
        if (value=="completed"){
            setShowInput(false);
        } else {
            setShowInput(true);
        }
    }

    return(
        <div className="actions">
            <select name="param" onChange={e=>{toggleInput(e.target.value)}}>
                <option value="id"> ID </option>
                <option value="user-id"> User ID </option>
                <option value="completed"> Completed </option>
            </select>
            {
                showInput? <input type="text"/> : null
            }
        </div>
    );
}

export default CRUD;

