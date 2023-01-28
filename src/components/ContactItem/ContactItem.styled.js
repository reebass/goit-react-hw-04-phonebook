import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px;
  background-color: transparent;
  color: #394147;
  border: 0;

  transition: color 250ms ease;

  :hover {
    color: rgb(1, 123, 255);
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;
export const Name = styled.span`
  font-weight: 600;
`;
export const Number = styled.span`
  color: #c8c8c8;
`;
