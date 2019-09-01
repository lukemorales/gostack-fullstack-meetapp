import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';

import { Container } from './CreateMeetup_Styles';

export default function CreateMeetup() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    try {
      setLoading(true);

      const response = await api.post('meetups', data);
      toast.success('Meetup criado com sucesso!');
      history.push(`/meetups/${response.data.id}`);
    } catch (err) {
      toast.error('Erro ao criar o Meetup. Tente novamente.');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  const schema = Yup.object().shape({
    banner_id: Yup.number()
      .transform(value => (!value ? undefined : value))
      .required('Banner is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.date().required('Date is required'),
    location: Yup.string().required('Location is required'),
  });

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Title" />
        <Input name="description" placeholder="Description" multiline />
        <DatePicker name="date" placeholder="Date" />
        <Input name="location" placeholder="Location" />

        <button type="submit" disabled={loading}>
          <MdAddCircleOutline size={22} color="#fff" />
          Create
        </button>
      </Form>
    </Container>
  );
}
