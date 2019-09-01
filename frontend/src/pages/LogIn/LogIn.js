import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { logInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail Inválido')
    .required('Insira seu e-mail'),
  password: Yup.string().required('Insira sua senha'),
});

export default function LogIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(logInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail" />

        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit" disabled={loading}>
          Entrar
        </button>

        <p>
          Ainda não é cadastrado?
          <Link to="/register">Criar uma Conta</Link>
        </p>
      </Form>
    </>
  );
}
