import { MessageText } from './Message.styled';
import PropTypes from 'prop-types';

Event.PropTypes = {
  test: PropTypes.string.isRequired,
};

export const Message = ({ text }) => {
  return <MessageText>{text}</MessageText>;
};
