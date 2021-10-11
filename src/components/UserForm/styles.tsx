import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 16px;
  width: 400px;
  background-color: white;
  border-radius: 8px;
  margin: auto;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &:focus{
    outline: none;
    border: 1px solid #008ffd;
  }
  &[disabled] {
    opacity: 0.7;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  color: #008ffd;
  text-align: center;
`

export const Error = styled.p`
  background-color: red;
  margin: 8px 0;
  padding: 8px 8px;
  opacity: 0.5;
  color: white;
  font-size: 16px;
  text-align: center;
`
