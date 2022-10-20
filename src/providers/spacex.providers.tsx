import { createContext, ReactNode, useContext, useState } from "react";
import { ILaunch } from "../interfaces";
import apiSpaceX from "../services/api";

interface ISpaceXProviderProps {
  children: ReactNode;
}

interface ISpaceXProviderData {
  launches: ILaunch[];
  getLatestLaunch: () => Promise<void>;
  getNextLaunch: () => Promise<void>;
  getUpcomingLaunches: () => Promise<void>;
  getPastLaunches: () => Promise<void>;
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

  const getUpcomingLaunches = async () => {
    apiSpaceX
      .get("/v5/launches/upcoming")
      .then((response) => {
        setLaunches(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getPastLaunches = async () => {
    apiSpaceX
      .get("/v5/launches/past")
      .then((response) => {
        setLaunches(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <SpaceXContext.Provider
      value={{
        launches,
        getNextLaunch,
        getLatestLaunch,
        getUpcomingLaunches,
        getPastLaunches,
      }}
    >
      {children}
    </SpaceXContext.Provider>
  );
};
