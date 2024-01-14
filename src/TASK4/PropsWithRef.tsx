//forwardRef

//커스텀 컴포넌트에서 ref를 통한 직접 제어가 필요할 때,
//React.forwardRef를 사용하면 부모 컴포넌트로부터 하위 컴포넌트로 ref를 전달할 수 있다.
//ref를 HTML 요소의 속성으로 넘겨줌으로써 함수 컴포넌트에서 ref를 통한 제어가 가능해진다.

// 커스텀한 입력 컴포넌트
<CustomInput
  type="text"
  ref={nameRef} // 함수 컴포넌트는 ref가 존재하지 않음!
></CustomInput>;
//커스텀 컴포넌트는 ref 속성이 존재하지 않아 위와 같이 ref를 전달받을 수 없다.

// forwardRef로 컴포넌트를 감싼 모습
const CustomInput = React.forwardRef(
  ({ type, onKeyDown, placeholder }, ref) => {
    return (
      <input
        type={type}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        // 전달받은 ref는 HTML 속성으로 전달됩니다.
        ref={ref}
      ></input>
    );
  }
);

export default CustomInput;
//따라서 컴포넌트가 ref를 전달받기 위해서는 React.forwardRef 로 컴포넌트를 감싸준 후, props 뒤에 별도로 전달된 ref를 활용하면 된다.

//PropsWithRef 사용하기
type InputProps2 = {
  ...
  ref: React.Ref<HTMLInputElement>;
};

const MyInput2: FC<PropsWithRef<InputProps2>> = ({...}) => {
  return (
    <input ref={ref} />
  );
};
