type Todo = {
  title: string;
  content: string;
  state: boolean;
};

const OneTodo = ({ todo }: { todo: Todo }) => {
  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.content}</div>
      <div
        style={{
          color: todo.state ? "green" : "red",
        }}
      >
        {todo.state ? "Done" : "Not Done"}
      </div>
    </>
  );
};
export default OneTodo;
