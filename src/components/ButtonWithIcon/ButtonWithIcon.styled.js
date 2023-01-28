import styled from 'styled-components';

export const Button = styled.button`
  margin: 0;
  padding: 5px 10px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  color: currentColor;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
  font-weight: 600;
  background-color: rgb(1, 123, 255);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  transition: background-color 250ms ease;

  :hover {
    background-color: rgba(1, 123, 255, 0.8);
  }
`;
