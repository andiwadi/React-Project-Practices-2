import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const TodoList = () => {
  const [todoList, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodolist([...todoList, newTask]);
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      return task !== taskName;
    });
    setTodolist(newTodoList);
  };

  return (
    <>
      {/* Add Task */}
      <div>
        <h1 className="font-bold text-xم">Todo List APP</h1>
        <input onChange={handleChange} />
        <button onClick={addTask} className="but-blue ml-2">
          Add Task
        </button>
      </div>

      {/* List */}
      <div>
        {todoList.map((task) => {
          return (
            <div className="flex gap-2 p-1">
              <span>{task}</span>
              <span className="mt-1 bg-red-700 p-1 rounded-lg cursor-pointer">
                <FiTrash2 onClick={() => deleteTask(task)} />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
