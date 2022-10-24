import { Search } from "./style";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBox = ({ setInput }: any) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faRocket}
        style={{
          position: "relative",
          left: "41px",
          verticalAlign: "text-bottom",
        }}
      />
      <Search
        type="search"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Pesquise"
      />
    </div>
  );
};
