import { LaunchCard } from "../../components/launchCard";
import { useSpaceX } from "../../providers/spacex.providers";
import { Container } from "./style";

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
      <h1>Space - CalliX</h1>
      <div>
        <button onClick={getNextLaunch}>Próximo Lançamento</button>
        <button onClick={getLatestLaunch}>Último lançamento</button>
        <button onClick={getUpcomingLaunches}>Próximos lançamentos</button>
        <button onClick={getPastLaunches}>Lançamentos passados</button>
      </div>
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
