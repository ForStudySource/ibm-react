

// Model

class Todo{
    constructor(id,title) {
        this.title = title;
        this.completed = false;
    }
}

//--------------------------------
const todos = [];
//--------------------------------

// Service
class TodoService{
    addTodo(title) {
        var newTodo = new Todo(1, title);
        
    }
    
}

// ..........