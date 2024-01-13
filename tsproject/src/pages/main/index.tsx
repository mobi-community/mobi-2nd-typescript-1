import { useNavigate } from "react-router-dom";
import Button from "../../compoents/button/Button";
import { FC, MouseEvent } from "react";

const Home: FC = () => {
  const navigator = useNavigate();

  const navigateToTodoPage = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
    navigator("/todo");
  };

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={navigateToTodoPage} variant={"primary"} size={"small"}>
        Go to TodoPage
      </Button>
    </div>
  );
};
export default Home;
