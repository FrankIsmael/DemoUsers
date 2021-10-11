import styled from 'styled-components'

export const Button = styled.button`
  background: #007fff;
  border-radius: 3px;
  color: #FFFFFF;
  height: 32px;
  width: 100%;
  text-align: center;
  &:hover{
    background: #0080ffca;
  };
  &[disabled] {
    opacity: 0.7;
  }
`
