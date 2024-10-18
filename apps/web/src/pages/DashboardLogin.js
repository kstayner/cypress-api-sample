import React from 'react';
import { Input, Button, Link } from '../components/atoms';
import { Form } from '../components/molecules';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(33, 72, 192, 1);
  color: white;
`;

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const DashboardLogin = () => {
  const { t } = useTranslation();
  return (
    <LoginContainer>
      <LoginForm>
        <Input placeholder={t('login.username')} />
        <Input type="password" placeholder={t('login.password')} />
        <Button>{t('login.button')}</Button>
        <Link href="/forgot-password">{t('login.forgotPassword')}</Link>
      </LoginForm>
    </LoginContainer>
  );
}

export default DashboardLogin;