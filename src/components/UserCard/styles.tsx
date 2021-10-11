import styled from 'styled-components';

export const Article = styled.article`
  min-width: 100%;
  text-align: center;
  @media only screen and (min-width: 768px) {
    min-width: 200px;
  }
`;

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  @media only screen and (min-width: 768px) {
    border-radius: 50%;
  }
`

export const text ="align"