import { useContext } from "react";
import {
  WeatherContext,
  type WeatherContextType,
} from "../context/WeatherContext.types";

export const useWeatherContext = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};
