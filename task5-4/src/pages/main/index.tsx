import { useNavigate } from "react-router-dom";
import Button from "../../compoents/button/Button";

const Home = () => {
  const navigator = useNavigate();

  const navigateToTodoPage = () => {
    navigator("/todo");
  };

  return (
    <div>
      <h1>Home</h1>
      <Button variant="primary" size="small" onClick={navigateToTodoPage}>
        Go to TodoPage
      </Button>
    </div>
  );
};
export default Home;
