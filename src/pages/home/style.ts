import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #fff;
  margin: 14px;
  font-size: 3rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 822px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  background: linear-gradient(to right, #f68933, #fc4a1a);
  background-color: var(--color-secondary);
  border-radius: 16px;
  border: 2px solid white;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 18px;
  text-decoration: none;
  margin: 5px;

  &:hover {
    background: linear-gradient(to bottom, white 5%, white 100%);
    color: #f08927;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
