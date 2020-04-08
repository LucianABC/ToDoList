import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getFullList} from './actions';
import './App.css';
import Main from './containers/Main/Main';
import CRUD from './containers/CRUD/CRUD';

function App({getFullList}) {
  useEffect(()=>{
    getFullList();
  },[])
  return (
    <div className="App">
      <CRUD></CRUD>
      <Main></Main>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return{
      getFullList: ()=>dispatch(getFullList())
  }
}
export default connect(null, mapDispatchToProps)(App);
