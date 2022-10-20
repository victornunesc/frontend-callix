import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 386px;
  margin: 12px 12px;
  background: rgb(197 181 165 / 12%);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
  backdrop-filter: blur(5.7px);
  border: 1px solid rgb(237 216 196 / 75%);
  padding: 4px;

  @media screen and (min-width: 822px) {
    width: 386px;
  }
`;

export const Logo = styled.img`
  width: 130px;
  height: 130px;
`;

export const Info = styled.div`
  color: var(--color-primary);
  font-size: 19px;
  width: 100%;
  margin-left: 20px;

  a {
    color: var(--color-secondary);
  }

  a:visited {
    color: #c1b199;
  }

  p {
    font-family: "Roboto", sans-serif;
  }
`;

export const Title = styled.h3`
  font-size: 19px;
  text-align: center;
  padding: 5px;
  font-family: "DM Mono", monospace;
`;
