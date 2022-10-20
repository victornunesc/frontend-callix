import { ILaunch } from "../../interfaces";
import { Card, Info, Logo, Title } from "./style";

export const LaunchCard = ({
  links,
  name,
  flight_number,
  date_unix,
}: ILaunch) => {
  const date = new Date(date_unix * 1000);

  return (
    <Card>
      <Logo src={links.patch.small} alt="logo" />
      <Info>
        <Title>{name}</Title>
        <p>Data: {date.toLocaleString()}</p>
        <p>Numero de voos: {flight_number}</p>
        <p>
          wikipedia:{" "}
          <a href={links.wikipedia} target="_blank" rel="noopener noreferrer">
            Clique Aqui
          </a>
        </p>
      </Info>
    </Card>
  );
};
