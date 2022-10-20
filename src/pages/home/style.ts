import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
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
  color: var(--color-primary);
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 18px;
  text-decoration: none;
  margin: 5px;

  &:hover {
    background: linear-gradient(
      to bottom,
      var(--color-primary) 5%,
      var(--color-primary) 100%
    );
    color: var(--color-secondary);
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export const DisplaySection = styled.section`
  @media screen and (min-width: 822px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 821px;
  }
`;
