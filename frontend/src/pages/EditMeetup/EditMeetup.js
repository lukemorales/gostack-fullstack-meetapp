import React, { useState, useEffect } from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdSave, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';
import Loader from 'react-loader-spinner';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';

import { Container } from './EditMeetup_Styles';

export default function EditMeetup({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`organizers/${id}`);
        setMeetup({
          ...response.data.meetup,
          date: parseISO(response.data.meetup.date),
        });
        setLoading(false);
      } catch (err) {
        toast.error('Meetup not found');
        history.push('/');
      }
    }

    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    try {
      setLoading(true);
      await api.put(`meetups/${id}`, data);
      toast.success('Meetup editado com sucesso!');
      history.push(`/meetups/${id}`);
    } catch (err) {
      toast.error('Erro ao editar o Meetup. Tente novamente.');
      setLoading(false);
    }
  }

  async function handleCancel() {
    try {
      await api.delete(`meetups/${id}`);
      toast.success('Meetup cancelado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro ao cancelar o Meetup. Tente novamente.');
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
      {loading ? (
        <div className="loading">
          <Loader type="TailSpin" color="#e65175" width={32} height={32} />
        </div>
      ) : (
        <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
          <BannerInput name="banner_id" />
          <Input name="title" placeholder="Title" />
          <Input name="description" placeholder="Description" multiline />
          <DatePicker name="date" placeholder="Date" />
          <Input name="location" placeholder="Location" />

          <nav>
            <button type="button" className="cancel" onClick={handleCancel}>
              <MdDeleteForever size={20} color="#e65175" />
              Cancelar Meetup
            </button>

            <button type="submit" disabled={loading}>
              <MdSave size={20} color="#fff" />
              Salvar
            </button>
          </nav>
        </Form>
      )}
    </Container>
  );
}
