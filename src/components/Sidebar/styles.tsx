import styled, { css } from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Nav = styled.nav<{ fixed: boolean }>`
  width: 100%;
  padding: 16px;
  background-color: white;
  border: 1px solid #eaeef3;
  @media only screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    display: flex;
    padding: 0;
  }
`;

export const Link = styled(LinkRouter)`
  align-items: center;
  padding: 0 16px;
  margin: 8px 0;
  height: 40px;
  width: 100%;
  display: inline-flex;
  text-decoration: none;
  border-radius: 8px;
  color: #46505a;
  &:hover {
    color: black;
    background-color: #f3f6f9;
  }
  &[aria-current] {
    color: #008ffd;
    background-color: #f0f7ff;
  }
  @media only screen and (min-width: 768px) {
    &:last-child {
      position: absolute;
      bottom: 16px;
      left: 16px;
      width: 168px;
    }
  }
`;

export const Text = styled.span`
  padding: 8px;
`;
