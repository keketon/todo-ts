import React, {useRef} from "react";

const AddTodo: React.FC = () => {

    // nullで初期化？
    const textInputRef = useRef<HTMLInputElement>(null);

    // フォームによるsubmitされたら、useRefが発火する
    const todoSubmitHandler = (event: React.FormEvent) => {
        // input押下後の即時再レンダーを防ぐ
        event.preventDefault();

        // textInputRefがformに入力された情報
        // currentは今？current以外にもある?IDEのsuggenstionにはcurrentしかない
        const enteredText = textInputRef.current!.value;
        console.log(enteredText)
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                {/* ref={textInputRef}で変数をhtmlにバインディングするイメージ? */}
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">ADD todo</button>
        </form>
    ); 
};

export default AddTodo;