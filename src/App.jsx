import React, { useState , useEffect } from 'react';
import Navbar from './components/Navbar';


function App() {
  // Initialize todo state
  const [todo, setTodo] = useState('');
  // Initialize array to hold all todos
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    if (todostring) {
     let todos = JSON.parse(localStorage.getItem("todos"));
     setTodos(todos) 
    }
     
   }, [])

  const saveToLS = () =>{
    localStorage.setItem( "todos" , JSON.stringify(todos))
  }

  const addTodo = () => {
    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo(''); // Clear the input after adding a todo
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
    saveToLS();
  };

  const edittodo = (index) => {
    const updatedTodos = [...todos];// Create a copy of the todos array
    setTodo(updatedTodos[index].todo)
     
    updatedTodos.splice(index, 1); // Remove the todo item at the specified index
    setTodos(updatedTodos); 
    saveToLS();
  };

  const deleteTodo = (index) => {
   let a = confirm("do you want to delete this task");
   if (a) {
      const updatedTodos = [...todos]; // Create a copy of the todos array
     updatedTodos.splice(index, 1); // Remove the todo item at the specified index
     setTodos(updatedTodos); 
   }
   saveToLS();
  };

  const handleCheckbox = (index) => {
    const updatedTodos = [...todos]; // Create a copy of the todos array
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted; // Toggle the completion status
    setTodos(updatedTodos); // Update the todos state with the modified array
    saveToLS();
  };

  return (
    <>
      <div className="body">
        <Navbar />
        <div className="main mx-auto bg-purple-100 m-3 p-8 ml-8 mr-8 rounded-md min-h-96 items-center content-center text-center">
          <div className="AddTodo gap-5">
            <input
              type="text"
              onChange={handleChange}
              value={todo}
              placeholder="~~~Write todo~~~"
              className="w-2/3 text-center"
            />
            <button
              className="bg-purple-600 ml-5 rounded-lg w-14 font-bold text-white hover:bg-purple-800"
              onClick={addTodo}
              disabled={!todo.trim()}
            >
              ADD
            </button>
          </div>
          <div className="tasklist text-center font-bold">
            <h1>YOUR TASKS</h1>
          </div>
          <div className="allTodo">
            {todos.length === 0 && <div><h3><b><i className='text-gray-600'>NO TASKS TO DISPLAY</i></b></h3></div>}
            {todos.map((item, index) => (
              <div
                key={index}
                className={`flex mt-3 items-center w-2/3 justify-between ${
                  item.isCompleted ? 'line-through' : ''
                }`}
              >
                <input
                  type="checkbox"
                  onChange={() => handleCheckbox(index)} // Pass the index of the todo item
                  checked={item.isCompleted}
                />
                <div>{item.todo}</div>
                <div className='flex'>
                  <button
                    className="bg-purple-600  rounded-lg w-14 font-bold text-white hover:bg-purple-800"
                    onClick={()=>edittodo(index)}
                  >
                    EDIT
                  </button>
                  <button
                    className="bg-purple-600 ml-2  rounded-lg w-20 font-bold text-white hover:bg-purple-800"
                    onClick={()=> deleteTodo(index)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
