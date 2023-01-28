import { ErrorMessage, Field, Form } from 'formik';
import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 30px;
  margin-top: 15px;
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  color: #c8c8c8;
`;

export const Input = styled(Field)`
  display: block;
  width: 300px;
  padding: 5px 10px;
  border: 1px solid #54585d;
  border-radius: 5px;
  outline: none;
  margin-bottom: 4px;

  color: #fefeff;
  font-size: 16px;
  background-color: #54585d;

  transition: border-color 180ms ease;

  :focus {
    border-color: rgb(1, 123, 255);
  }
`;

export const InputNumber = styled(MaskedInput)`
  display: block;
  width: 300px;
  padding: 5px 10px;
  border: 1px solid #54585d;
  border-radius: 5px;
  outline: none;
  margin-bottom: 4px;

  color: #c8c8c8;
  font-size: 16px;
  background-color: #54585d;

  transition: border-color 180ms ease;

  :focus {
    border-color: rgb(1, 123, 255);
    color: #fefeff;
  }
`;

export const ValidMessage = styled(ErrorMessage)`
  font-size: 12px;
  color: #ec2645;
  text-transform: lowercase;
  font-weight: 400;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 10px;
  min-width: 120px;

  color: currentColor;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;

  background-color: rgb(1, 123, 255);
  border: 0;
  border-radius: 4px;

  transition: color 180ms ease;

  :hover,
  :focus {
    background-color: rgba(1, 123, 255, 0.8);
  }

  &:disabled {
    background-color: #ffffff;
    color: #bdbdbd;
    cursor: no-drop;
  }
`;
