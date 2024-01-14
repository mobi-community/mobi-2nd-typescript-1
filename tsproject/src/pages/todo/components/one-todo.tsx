interface TodoItemProps {
  title: string;
  content: string;
  state: boolean;
}

const OneTodo = ({ title, content, state }: TodoItemProps) => {
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
