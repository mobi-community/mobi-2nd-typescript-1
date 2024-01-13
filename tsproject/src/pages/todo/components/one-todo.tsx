interface TodoItemProps {
  title: string;
  content: string;
  state: boolean;
}

// 즉시 실행 함수로 작성시 JSX component로 쓸 수 없다는데 왜?

function OneTodo({ title, content, state }: TodoItemProps) {
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
}
export default OneTodo;
