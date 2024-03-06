import { useState } from "react";
import './Todo.css';


const Editdelete=() => {

    const[todos,setTodos]=useState([])

    const[newTodo,setNewTodo]=useState('')

    const[editIndex,setEditIndex]=useState(-1)

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            if (editIndex === -1) {
                setTodos([...todos, newTodo]); //adding new elements into an array
                
            }else {
                const updatedTodos = [...todos]; //adding editing an existing element
                updatedTodos[editIndex] = newTodo;
                setTodos(updatedTodos);

                setEditIndex(-1);
         }
         setNewTodo('');
        }
    };
    const editTodo = (index) => {
        setNewTodo(todos[index]);
        setEditIndex(index);
    };
    

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index,1);
        setTodos(updatedTodos);
    };

    return (
        
        <div>
            <div className="background">

            <h2>ToDo List</h2>
            
            <div>
                <input type="text" className="form-control" placeholder="Enter Any Data"
                value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                <button onClick={addTodo} className="a">
                    {editIndex === -1 ? 'Add Todo' : 'Edit Todo'}
                </button>

                

            </div>

            <ul>
                {todos.map((todo,index) => (
                    <li key={index}>
                        {todo}{''}
                        <button onClick={() => editTodo(index)} className="b">Edit</button>
                        <button onClick={() => deleteTodo(index)} className="c">Delete</button>
                    </li>
                )
                )}
            </ul>
        </div>
        </div>
    );


};
export default Editdelete