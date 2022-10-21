import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
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

  const LOADING_TOAST = "Preparing launch...";
  const SUCCESS_TOAST = "Rocket on!!";
  const ERROR_TOAST = "Launch failure =/";

  const getLatestLaunch = async () => {
    const loading = toast.loading(LOADING_TOAST);

    apiSpaceX
      .get("/spacex/launches/latest")
      .then((response) => {
        toast.dismiss(loading);
        toast(SUCCESS_TOAST, {
          icon: "🚀",
        });
        setLaunches([response.data]);
      })
      .catch((err) => {
        console.log(err);
        toast.dismiss(loading);
        toast.error(ERROR_TOAST);
      });
  };

  const getNextLaunch = async () => {
    const loading = toast.loading(LOADING_TOAST);

    apiSpaceX
      .get("/spacex/launches/next")
      .then((response) => {
        toast.dismiss(loading);
        toast(SUCCESS_TOAST, {
          icon: "🚀",
        });
        setLaunches([response.data]);
      })
      .catch((err) => {
        console.log(err);
        toast.dismiss(loading);
        toast.error(ERROR_TOAST);
      });
  };

  const getUpcomingLaunches = async () => {
    const loading = toast.loading(LOADING_TOAST);

    apiSpaceX
      .get("/spacex/launches/upcoming")
      .then((response) => {
        toast.dismiss(loading);
        toast(SUCCESS_TOAST, {
          icon: "🚀",
        });
        setLaunches(response.data);
      })
      .catch((err) => {
        console.log(err);
        toast.dismiss(loading);
        toast.error(ERROR_TOAST);
      });
  };

  const getPastLaunches = async () => {
    const loading = toast.loading(LOADING_TOAST);

    apiSpaceX
      .get("/spacex/launches/past")
      .then((response) => {
        toast.dismiss(loading);
        toast(SUCCESS_TOAST, {
          icon: "🚀",
        });
        setLaunches(response.data);
      })
      .catch((err) => {
        console.log(err);
        toast.dismiss(loading);
        toast.error(ERROR_TOAST);
      });
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
