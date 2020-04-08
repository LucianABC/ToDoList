import React from 'react';

interface Props {     
  "userId": number;
  "id": number;
  "title": string;
  "completed": boolean;
}

const ToDo: React.FC<Props> = (props)=>{
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.userId}</td>
            <td>{props.completed? "hecho" : "no hecho"}</td>
        </tr>
    );
}

export default ToDo;