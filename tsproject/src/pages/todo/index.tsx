import { useEffect, useState, FC } from "react";
import OneTodo from "./components/one-todo";

interface Todo {
  id: number;
  title: string;
  content: string;
  state: boolean;
}

const Pair2Todo: FC = () => {
  // useState의 제네릭 타입으로 Todo[]를 사용
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    setTodoList([
      {
        id: 1,
        title: "title1",
        content: "content1",
        state: true,
      },
      {
        id: 2,
        title: "title2",
        content: "content2",
        state: false,
      },
      {
        id: 3,
        title: "title3",
        content: "content3",
        state: false,
      },
    ]);
  }, []);

  return (
    <div>
      <h1>Todo Page</h1>
      {todoList.map((todo) => (
        <OneTodo
          key={todo.id}
          title={todo.title}
          content={todo.content}
          state={todo.state}
        />
      ))}
    </div>
  );
};
export default Pair2Todo;
