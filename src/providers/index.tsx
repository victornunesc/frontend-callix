import { ReactNode } from "react";
import { SpaceXProvider } from "./spacex.providers";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <SpaceXProvider>{children}</SpaceXProvider>
);
