import { FC, useEffect, useState } from "react";
import OneTodo from "./components/one-todo";

type Todo = {
  title: string;
  content: string;
  state: boolean;
};

const Todo: FC = () => {
  const [todoLsit, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    setTodoList([
      {
        title: "title1",
        content: "content1",
        state: true,
      },
      {
        title: "title2",
        content: "content2",
        state: false,
      },
      {
        title: "title3",
        content: "content3",
        state: false,
      },
    ]);
  }, []);

  return (
    <div>
      <h1>Todo Page</h1>
      {todoLsit.map((todo) => (
        <OneTodo todo={todo} />
      ))}
    </div>
  );
};
export default Todo;
