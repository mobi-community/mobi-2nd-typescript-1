import { useEffect, useState } from "react";
import OneTodo from "./components/one-todo";
// 해당 모듈의 type만 가져올 수 있어서 데이터 줄어든다
import type { Todo } from "../../type/todo";
import { TodoData } from "../../data/TodoData";

const Todo: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    setTodoList(TodoData);
  }, []);

  return (
    <div>
      <h1>Todo Page</h1>
      {todoList.map((todo, index) => {
        const { title, content, state } = todo;
        return (
          <OneTodo key={index} title={title} content={content} state={state} />
        );
      })}
    </div>
  );
};
export default Todo;
