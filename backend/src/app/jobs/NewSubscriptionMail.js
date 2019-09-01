import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Mail from '../../lib/Mail';

class NewSubscriptionMail {
  get key() {
    return 'NewSubscriptionMail';
  }

  async handle({ data }) {
    const { meetup, user } = data;

    await Mail.sendMail({
      to: `${meetup.organizer.name} <${meetup.organizer.email}>`,
      subject: `Nova inscrição (${meetup.title})`,
      template: 'newSubscription',
      context: {
        organizer: meetup.organizer.name,
        meetupTitle: meetup.title,
        meetupDate: format(
          parseISO(meetup.date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: ptBR,
          }
        ),
        userName: user.name,
        userEmail: user.email,
      },
    });
  }
}

export default new NewSubscriptionMail();
