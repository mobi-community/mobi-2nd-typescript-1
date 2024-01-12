//ReactNode : 컴포넌트가 받는 자식 요소의 타입을 더 유연하게 만들기 위해서
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Container>
      <p>Hello, I am a paragraph.</p>
      <button>Click me</button>
    </Container>
  );
};
/*
여기서 Container 컴포넌트는 children prop을 받아서 <div className="container">{children}</div>와 같은 형태로 렌더링합니다.

이때, ReactNode를 사용하면 Container는 다양한 종류의 자식 요소를 받을 수 있습니다. 예를 들어, <p>(문단) 요소와 <button> 요소를 동시에 자식으로 받을 수 있습니다.

만약 Container가 ReactNode를 사용하지 않고, 특정한 타입만을 받도록 정의했다면, 특정한 타입의 자식만을 받을 수 있게 되어 유연성이 떨어지게 됩니다.

간단한 컴포넌트에서는 ReactNode를 사용하지 않아도 되겠지만, 특히 다양한 형태의 컴포넌트를 만들거나 라이브러리를 작성할 때, ReactNode를 사용하여 유연성을 확보하는 것이 좋습니다.
*/