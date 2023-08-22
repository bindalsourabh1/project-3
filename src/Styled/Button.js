import styled from 'styled-components';
export const Button = styled.button`
  color: white;
  padding: 10px 20px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.3s background ease-in-out;
  cursor: pointer;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in-out;
  }
`;


export const outlineButton = styled(Button)`
    border: 1px solid black;
    background-color: white;
    color: black;
  &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;