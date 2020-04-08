export const setTodos = (payload)=>({
    type: "SET_TODOS",
    payload: payload
})

export const getFullList = () =>({
    type: "GET_TODO_LIST"
})

export const searchTodo = (id="", content="") =>({
    type: "SEARCH_TODO",
    param: id,
    content: content
})



export default {
    setTodos,
    getFullList,
    searchTodo
} 