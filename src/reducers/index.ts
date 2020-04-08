const reducer =(state,action)=>{
    switch(action.type){
        case "SEARCH_TODO":
        case "GET_TODO_LIST":
        case "SET_TODOS":
                return action.payload;
        default:
            return state;
    }
}

export default reducer;