import type { Todo } from "../../../type/todo";

const OneTodo = ({ title, content, state }: Todo) => {
  return (
    <>
      <div>{title}</div>
      <div>{content}</div>
      <div
        style={{
          color: state ? "green" : "red",
        }}
      >
        {state ? "Done" : "Not Done"}
      </div>
    </>
  );
};
export default OneTodo;
