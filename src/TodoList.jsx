import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1 className = "text1">Gerenciamento de Notas de Recado</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Adicionar</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span style={{ marginRight: "10px", textDecoration: todo.checked ? "line-through" : "none" }}>
                {todo.text}
              </span>
            </div>
            <button className = "delete" style={{ marginTop: "5px", marginBottom: "5px" }} onClick={() => handleDeleteTodo(index)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

//Sandrinha é bondosa e ira me passar de ano com exelencia :) :-) S2