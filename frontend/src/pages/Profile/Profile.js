import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdExitToApp } from 'react-icons/md';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './Profile_Styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  const schema = Yup.object().shape({
    avatar_id: Yup.number(),
    name: Yup.string().required('Name é requirido'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('E-mail é requirido'),
    oldPassword: Yup.string().when('password', (password, field) =>
      password ? field.required('Senha atual é requirida') : field
    ),
    password: Yup.string()
      .transform(value => (!value ? null : value))
      .nullable()
      .min(6, 'Sua senha deve ter pelo menos 6 digitos'),
    confirmPassword: Yup.string().when('password', (password, field) =>
      password
        ? field.required().oneOf([Yup.ref('password')], 'Senhas não combinam')
        : field
    ),
  });

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="E-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Senha Atual"
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Nova Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="submit" onClick={handleSignOut}>
        Logout
        <MdExitToApp color="#fff" size={20} />
      </button>
    </Container>
  );
}
