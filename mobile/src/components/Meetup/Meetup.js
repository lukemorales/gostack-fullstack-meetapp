import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Button from '~/components/Button';
import {
  Container,
  Banner,
  Info,
  Title,
  InfoRow,
  InfoText,
  CancelButton,
} from './Meetup_Styles';

export default function Meetup({ data, handleRegister, handleCancel }) {
  return (
    <Container>
      <Banner source={{ uri: data.banner && data.banner.url }} />
      <Info>
        <Title>{data.title}</Title>
        <InfoRow>
          <Icon name="event" size={16} color="#999" />
          <InfoText>
            {format(
              parseISO(data.date),
              "dd 'de' MMMM 'de' yyyy 'às' HH'h'mm",
              {
                locale: pt,
              }
            )}
          </InfoText>
        </InfoRow>
        <InfoRow>
          <Icon name="location-on" size={16} color="#999" />
          <InfoText>{data.location}</InfoText>
        </InfoRow>
        <InfoRow last={!data.past}>
          <Icon name="person" size={16} color="#999" />
          <InfoText>Organizador: {data.organizer.name}</InfoText>
        </InfoRow>

        {handleRegister && !data.past && (
          <Button onPress={handleRegister}>Participar</Button>
        )}

        {handleCancel && (
          <CancelButton onPress={handleCancel}>Cancelar Inscrição</CancelButton>
        )}
      </Info>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape({
    past: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
    banner: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    organizer: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleRegister: PropTypes.func,
  handleCancel: PropTypes.func,
};

Meetup.defaultProps = {
  handleRegister: null,
  handleCancel: null,
};
