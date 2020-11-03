import React, { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import { ToDo } from './todo.model';

// FCはFunction Componentらしい。
const App: React.FC = () => {

  // この宣言法は...？
  const [todos, setTodos] = useState<ToDo[]>([]);

  const todoAdd = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
      // {id: "0.8759291112629384", text: "宿題をする"}のようなデータをもつテキストが生成される。
    ]);
  };

  return (
    <div className="App">
      <AddTodo todoAdded={todoAdd} />
      <Todo items={todos} />
    </div>
  );
}

export default App;