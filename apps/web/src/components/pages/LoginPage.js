import React from 'react';
import { Input, Button, Link } from '../atoms';
import { Form } from '../molecules';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled(Form)`
  width: 300px;
`;

const LoginPage = () => {
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