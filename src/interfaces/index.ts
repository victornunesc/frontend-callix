export interface ILaunch {
  id?: string;
  name: string;
  flight_number: number;
  links: {
    patch: {
      small: string;
    };
    wikipedia: string;
  };
  date_unix: number;
}
