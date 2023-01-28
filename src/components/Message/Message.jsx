import { MessageText } from './Message.styled';
import PropTypes from 'prop-types';



export const Message = ({ text }) => {
  return <MessageText>{text}</MessageText>;
};


Message.propTypes = {
  text: PropTypes.string.isRequired,
};