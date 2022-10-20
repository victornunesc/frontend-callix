import { ILaunch } from "../../interfaces";
import { Card, Info, Logo, Title } from "./style";
import spacex from "../../assets/spacex-159.png";

export const LaunchCard = ({
  links,
  name,
  flight_number,
  date_unix,
}: ILaunch) => {
  const date = new Date(date_unix * 1000);

  return (
    <Card>
      {links.patch.small ? (
        <Logo src={links.patch.small} alt="logo" />
      ) : (
        <Logo src={spacex} alt="logo" />
      )}
      <Info>
        <Title>{name}</Title>
        <p>Data: {date.toLocaleString()}</p>
        <p>Numero de voos: {flight_number}</p>
        <p>
          Wikipedia:{" "}
          {links.wikipedia ? (
            <a href={links.wikipedia} target="_blank" rel="noopener noreferrer">
              Clique Aqui
            </a>
          ) : (
            <span>Não disponível</span>
          )}
        </p>
      </Info>
    </Card>
  );
};
