import { createContext } from "react";
import type { WeatherData } from "../types/weather";

export interface WeatherContextType {
  weatherHistory: WeatherData[];
  addToHistory: (data: WeatherData) => void;
  clearHistory: () => void;
  removeFromHistory: (timestamp: number) => void;
  refreshWeather: (
    city: string,
    country: string,
    lat: number,
    lon: number,
  ) => Promise<void>;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined,
);
