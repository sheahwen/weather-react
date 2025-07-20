import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface WeatherData {
  searched_at: number;
  city: string;
  country: string;
  weather: any;
}

interface WeatherContextType {
  weatherHistory: WeatherData[];
  addToHistory: (data: WeatherData) => void;
  clearHistory: () => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [weatherHistory, setWeatherHistory] = useState<WeatherData[]>([]);

  const addToHistory = (data: WeatherData) => {
    setWeatherHistory((prev) => {
      // Check if this city/country combination already exists
      const exists = prev.some(
        (item) =>
          item.city.toLowerCase() === data.city.toLowerCase() &&
          item.country === data.country,
      );

      if (exists) {
        // Update the existing entry with new data
        return prev.map((item) =>
          item.city.toLowerCase() === data.city.toLowerCase() &&
          item.country === data.country
            ? { ...data, searched_at: Date.now() }
            : item,
        );
      } else {
        // Add new entry to the beginning of the array
        return [{ ...data, searched_at: Date.now() }, ...prev];
      }
    });
  };

  const clearHistory = () => {
    setWeatherHistory([]);
  };

  return (
    <WeatherContext.Provider
      value={{ weatherHistory, addToHistory, clearHistory }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
