import styled from "styled-components";
import Pair2Input from "../../components/input";
import Pair2Button from "../../components/button";
import {
  ChangeEvent,
  FormEvent,
  useState,
  FC,
  ChangeEventHandler,
} from "react";

const SignInForm: FC = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const checkUserNameValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserName(e.target.value);
    console.log(e.target.value);
  };

  const checkPasswordValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserPassword(e.target.value);
  };

  const onSubmitAlert = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("userName :", userName);
    alert(`아이디 : ${userName} | 비밀번호 :${userPassword}`);
  };

  return (
    <Container>
      <Form onSubmit={onSubmitAlert}>
        <Pair2Input
          label={"아이디"}
          type={"text"}
          message={""}
          onChange={checkUserNameValue}
        />
        <Pair2Input
          label={"비밀번호"}
          type={"password"}
          message={""}
          onChange={checkPasswordValue}
        />
        <Pair2Button label={"login"} type={"submit"} disabled={false} />
      </Form>
    </Container>
  );
};
export default SignInForm;

const Container = styled.div``;
const Form = styled.form``;
