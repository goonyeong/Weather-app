import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, InputBox } from "./LoginStyle";

function Login(): JSX.Element {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data 변경될때마다 state 값을 그 시점의 value 값으로 변경해준다.
  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPw(e.target.value);
  };

  // Login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click Login");
  };

  // 페이지 렌더링 후 처음 호출되는 useEffect
  useEffect(() => {
    axios
      .get("./user_inform/login")
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <h2>Login</h2>
      <InputBox>
        <label htmlFor="input_id">ID : </label>
        <input
          type="text"
          id="input_id"
          value={inputId}
          onChange={handleInputId}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="input_pw">Password : </label>
        <input
          type="password"
          id="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />
      </InputBox>
      <div>
        <button type="button" onClick={onClickLogin}>
          Login
        </button>
      </div>
    </Container>
  );
}

export default Login;
