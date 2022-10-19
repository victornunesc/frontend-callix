import { useSpaceX } from "./providers/spacex.providers";

function App() {
  const { launches, getLatestLaunch, getNextLaunch } = useSpaceX();

  return (
    <>
      <div>
        <button onClick={getNextLaunch}>Próximo Lançamento</button>
        <button onClick={getLatestLaunch}>Último lançamento</button>
        <button>Próximos lançamentos</button>
        <button>Lançamentos passados</button>
      </div>
      {launches.map((launch) => (
        <div key={launch.id}>
          <img src={launch.links.patch.small} alt="logo" />
          <p>{launch.sucess}</p>
          <p>{launch.name}</p>
          <p>wikipedia: {launch.links.wikipedia}</p>
          <p>Numero de voos: {launch.flight_number}</p>
        </div>
      ))}
    </>
  );
}

export default App;
