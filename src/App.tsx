import React from 'react';
import Todo from './components/Todo';

// FCはFunction Componentらしい。
const App: React.FC = () => {
  const todo = [{id: "1", text: "洗濯する"}]
  return (
    <div className="App">
      <Todo items={todo}/>
    </div>
  );
}

export default App;