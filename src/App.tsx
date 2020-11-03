import React from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

// FCはFunction Componentらしい。
const App: React.FC = () => {
  const todo = [{id: "1", text: "洗濯する"}]
  return (
    <div className="App">
      <AddTodo />
      <Todo items={todo}/>
    </div>
  );
}

export default App;