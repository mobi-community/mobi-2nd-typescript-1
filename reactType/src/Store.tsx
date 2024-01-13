import { Pet } from './model/pet';


interface OwnProps {
    data: Pet;
}

//{}를 쓰면 좋다. 바로 타입 안의 프로퍼티를 꺼낼 수 있다!
const Store = ({ data }: OwnProps) => {

    console.log(data.address);
    console.log(data.age);
    console.log(data.category);

    return <div>Store</div>;
};

export default Store;



// interface IPerson {
//     name: string;
//     age: number
// }

// const Person = ({name, age} : IPerson) => {

// }
