



let state = [
    { id: 1, text: 'Learn .js', completed: true },
    { id: 2, text: 'Learn React', completed: false }
];


let todos = {

    addTodo(text) {
        let nextId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id) + 1, -1);
        state = [{id:nextId,text,completed:false},...state];
    },

    deleteTodo(id) {
        state = state.filter(todo=>todo.id!==id);
    },

    editTodo(id, newText) {
        state = state.map(todo => { 
            return todo.id === id ? Object.assign({}, todo, { text:newText }) : todo;
        });
    },

    completeTodo(id) {
        state = state.map(todo => { 
            return todo.id===id?Object.assign({}, todo, { completed:!todo.completed}) : todo;
        });  
    },

    completeAll() {
        const allAreMarked = state.every(todo => todo.completed);
        state = state.map(todo => { 
            return Object.assign({}, todo, {completed:!allAreMarked});
        });  
    },   


    clearCompleted() {
        state = state.filter(todo=>!todo.completed);
    },    

    getTodos() {
        return state;  
    }



};

export default todos;