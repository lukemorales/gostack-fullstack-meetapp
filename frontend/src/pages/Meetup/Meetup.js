import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { MdEdit, MdDateRange, MdLocationOn } from 'react-icons/md';
import nl2br from 'react-nl2br';

import { pt } from 'date-fns/locale';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Details, Subscriptions } from './Meetup_Styles';

export default function Meetup({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`organizers/${id}`);
        setMeetup({
          ...response.data.meetup,
          subscriptions: response.data.subscriptions,
          formattedDate: format(
            parseISO(response.data.meetup.date),
            "dd 'de' MMMM 'de' yyyy 'às' HH'h'mm",
            {
              locale: pt,
            }
          ),
        });

        setLoading(false);
      } catch (err) {
        toast.error('Meetup não encontrado :(');
        history.push('/');
      }
    }

    loadMeetup();
  }, [id]);

  function handleEdit() {
    history.push(`/meetups/${id}/edit`);
  }

  return (
    <Container>
      {loading ? (
        <div className="loading">
          <Loader type="TailSpin" color="#e65175" width={32} height={32} />
        </div>
      ) : (
        <Details>
          <header>
            <h2>{meetup.title}</h2>

            {!meetup.past && (
              <nav>
                <button type="button" className="edit" onClick={handleEdit}>
                  <MdEdit size={16} color="#fff" />
                  Edit
                </button>
              </nav>
            )}
          </header>

          <article>
            <div>
              <img src={meetup.banner.url} alt={meetup.title} />
            </div>

            <div>
              <p>{nl2br(meetup.description)}</p>

              <footer>
                <div className="info">
                  <p>
                    <MdDateRange size={18} color="#e65175" />
                    {meetup.formattedDate}
                  </p>
                  <p>
                    <MdLocationOn size={18} color="#e65175" />
                    {meetup.location}
                  </p>
                </div>
                {meetup.subscriptions.length >= 1 && (
                  <Subscriptions>
                    <div>
                      {meetup.subscriptions.slice(0, 10).map((sub, index) => (
                        <img
                          style={{
                            zIndex: 10 - index,
                          }}
                          key={String(index)}
                          src={`https://ui-avatars.com/api/?background=D44059&color=fff&name=${sub.user.name}`}
                          alt={sub.user.name}
                        />
                      ))}
                      {meetup.subscriptions.length > 10 && (
                        <img
                          src={`https://ui-avatars.com/api/?background=D44059&color=fff&name=%2B+${meetup.subscriptions.length}`}
                          alt=""
                        />
                      )}
                    </div>
                    <span>
                      <strong>{meetup.subscriptions.length}</strong>{' '}
                      participante
                      {meetup.subscriptions.length > 1 && 's'}
                    </span>
                  </Subscriptions>
                )}
              </footer>
            </div>
          </article>
        </Details>
      )}
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
