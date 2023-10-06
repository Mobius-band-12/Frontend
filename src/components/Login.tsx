import styled from "styled-components";

import logo from "../assets/images/Logo.png";
import pattern from "../assets/images/Pattern.png";

const LoginWrapper = styled.div`
  padding: 5.94rem 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginPattern = styled.div`
  background: url(${pattern}) no-repeat center/contain;
  width: 50%;
  height: 100%;
  border-radius: 40px;
  max-width: 890px;
  max-height: 890px;
  align-self: flex-start;
`;

const LoginForm = styled.form`
  width: 50%;
  height: 100%;
  max-width: 526px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 100%;
  height: 100%;
  max-width: 180px;
  max-height: 85px;
  background: url(${logo}) no-repeat left/contain;
  margin-bottom: 4.5rem;
`;

const LoginHeading = styled.h1`
  font-size: 3.75rem;
  line-height: 4.125rem;
  font-weight: 700;
  color: var(--anthracite-color);
  margin: 0;
  margin-bottom: 4.25rem;
  width: 26.5rem;
`;

const LoginInput = styled.input`
  height: 60px;
  outline: none;
  border: 1px solid var(--anthracite-color);
  border-radius: 8px;
  width: 100%;
  padding: 16px;
  margin-bottom: 2rem;
  font-size: 1rem;
  &:last-of-type {
    margin-bottom: 4.25rem;
  }
  &::placeholder {
    color: var(--dark-gray-color);
    font-size: 1rem;
  }
`;

const LoginButton = styled.button`
  height: 64px;
  border: none;
  outline: none;
  background: var(--blue-color);
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  color: var(--white-color);
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
`;

const LoginLink = styled.a`
  color: var(--blue-color);
  padding: 0 1rem;
  font-size: 1.25rem;
  font-weight: 450;
  cursor: pointer;
  text-decoration: none;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm>
        <Logo />
        <LoginHeading>Авторизуйтесь в системе</LoginHeading>
        <LoginInput type="email" placeholder="E-mail"></LoginInput>
        <LoginInput type="password" placeholder="Пароль"></LoginInput>
        <LoginButton type="submit">Войти</LoginButton>
        <LoginLink href="/">Проблемы при входе?</LoginLink>
      </LoginForm>
      <LoginPattern />
    </LoginWrapper>
  );
};

export default Login;
