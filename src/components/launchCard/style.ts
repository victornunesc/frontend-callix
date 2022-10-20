import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  margin: 12px 12px;
  background: rgba(240, 137, 39, 0.09);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.7px);
  -webkit-backdrop-filter: blur(3.7px);
  border: 1px solid rgb(237 216 196 / 75%);
  padding: 4px;
`;

export const Logo = styled.img`
  max-width: 130px;
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
`;

export const Title = styled.h3`
  font-size: 19px;
  text-align: center;
`;
