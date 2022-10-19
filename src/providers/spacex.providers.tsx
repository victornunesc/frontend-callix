import { createContext, ReactNode, useContext, useState } from "react";
import apiSpaceX from "../services/api";

interface ISpaceXProviderProps {
  children: ReactNode;
}

interface ILaunch {
  id: string;
  name: string;
  flight_number: number;
  links: {
    patch: {
      small: string;
    };
    wikipedia: string;
  };
  sucess: boolean;
}

interface ISpaceXProviderData {
  launches: ILaunch[];
  getLatestLaunch: () => Promise<void>;
  getNextLaunch: () => Promise<void>;
}

const SpaceXContext = createContext<ISpaceXProviderData>(
  {} as ISpaceXProviderData
);

export const useSpaceX = () => {
  const context = useContext(SpaceXContext);

  if (!context) {
    throw new Error("useSpaceX must be used within an SpaceXProvider");
  }

  return context;
};

export const SpaceXProvider = ({ children }: ISpaceXProviderProps) => {
  const [launches, setLaunches] = useState<ILaunch[]>([]);

  const getLatestLaunch = async () => {
    apiSpaceX
      .get("/v5/launches/latest")
      .then((response) => {
        setLaunches([response.data]);
      })
      .catch((err) => console.log(err));
  };

  const getNextLaunch = async () => {
    apiSpaceX
      .get("/v5/launches/next")
      .then((response) => {
        setLaunches([response.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <SpaceXContext.Provider
      value={{ launches, getNextLaunch, getLatestLaunch }}
    >
      {children}
    </SpaceXContext.Provider>
  );
};
