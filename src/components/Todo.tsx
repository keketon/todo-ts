import React from "react";

interface TodoProps{
    items: {id: string, text: string}[]
};
    
const Todo: React.FC<TodoProps> = props => {
    return <ul>TODO.tsxから来ています</ul>
}

export default Todo;