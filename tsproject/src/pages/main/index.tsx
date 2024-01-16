import { useNavigate } from "react-router-dom";
import Button from "../../compoents/button/Button";
import { FC } from "react";

const Home: FC = () => {
  const navigator = useNavigate();

  const natvigateToTodoPage = () => {
    navigator("/todo");
  };

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={natvigateToTodoPage} variant="primary" size="small">
        Go to TodoPage
      </Button>
    </div>
  );
};
export default Home;
