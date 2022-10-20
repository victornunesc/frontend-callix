import { ILaunch } from "../../interfaces";
import { Card, Logo } from "./style";

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
      <div>
        <p>{name}</p>
        <p>Data: {date.toLocaleString()}</p>
        <p>Numero de voos: {flight_number}</p>
        <p>
          wikipedia: <a href={links.wikipedia}>Clique Aqui</a>
        </p>
      </div>
    </Card>
  );
};
