import { useNavigate } from 'react-router-dom';
import Button from '../../compoents/button/Button';

const Home = () => {
    const navigator = useNavigate();
    const natvigateToTodoPage = () => {
        navigator('/todo');
    };

    return (
        <div>
            <h1>Home</h1>
            <button onClick={natvigateToTodoPage}>Go to TodoPage</button>
        </div>
    );
};
export default Home;
