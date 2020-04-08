export const setTodos = (payload)=>({
    type: "SET_TODOS",
    payload: payload
})

export const getFullList = () =>({
    type: "GET_TODO_LIST"
})

export const searchTodo = (id:string, content:string, completed?:string) =>({
    type: "SEARCH_TODO",
    param: `${id}=${content}`,
    state: completed? `&completed=${completed}` :""
})



export default {
    setTodos,
    getFullList,
    searchTodo
} 