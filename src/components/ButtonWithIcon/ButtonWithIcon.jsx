import PropTypes from 'prop-types';
import { Button } from './ButtonWithIcon.styled';


export const ButtonWithIcon = ({ children, onClick, ...allyProps }) => (
  <Button type="button" onClick={onClick} {...allyProps}>
    {children}
  </Button>
);

ButtonWithIcon.defaultProps = {
  onClick: () => null,
  children: null,
};

ButtonWithIcon.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
