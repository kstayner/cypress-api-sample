import React from 'react';
import { Input, Button, Link } from '../components/atoms';
import { useTranslation } from 'react-i18next';
import { Form } from '../components/molecules';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(33, 72, 192, 1);
`;

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 1);
  border-radius: 4px;
`;

const DashboardLogin = () => {
  const { t } = useTranslation();
  return (
    <LoginContainer>
      <LoginForm>
        <Input placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
        <Link href="/forgot-password">Forgot password?</Link>
      </LoginForm>
    </LoginContainer>
  );
};

export default DashboardLogin;