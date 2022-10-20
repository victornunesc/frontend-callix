import { LaunchCard } from "../../components/launchCard";
import { useSpaceX } from "../../providers/spacex.providers";
import { Container, Title, Button, Nav } from "./style";

export const Home = () => {
  const {
    launches,
    getLatestLaunch,
    getNextLaunch,
    getUpcomingLaunches,
    getPastLaunches,
  } = useSpaceX();

  return (
    <Container>
      <Title>Space - CalliX</Title>
      <Nav>
        <Button onClick={getNextLaunch}>Próximo Lançamento</Button>
        <Button onClick={getLatestLaunch}>Último lançamento</Button>
        <Button onClick={getUpcomingLaunches}>Próximos lançamentos</Button>
        <Button onClick={getPastLaunches}>Lançamentos passados</Button>
      </Nav>
      <div>
        {launches.map((launch) => (
          <LaunchCard
            key={launch.id}
            name={launch.name}
            links={launch.links}
            flight_number={launch.flight_number}
            date_unix={launch.date_unix}
          />
        ))}
      </div>
    </Container>
  );
};
