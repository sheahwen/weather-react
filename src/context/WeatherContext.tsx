import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { getWeatherData } from "../config/api";
import type { WeatherData } from "../types/weather";

interface WeatherContextType {
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

  const removeFromHistory = (timestamp: number) => {
    setWeatherHistory((prev) =>
      prev.filter((item) => item.searched_at !== timestamp),
    );
  };

  const refreshWeather = async (
    city: string,
    country: string,
    lat: number,
    lon: number,
  ) => {
    try {
      const weatherData = await getWeatherData(lat, lon);

      const updatedEntry = {
        searched_at: Date.now(),
        city,
        country,
        weather: {
          lat,
          lon,
          timezone: weatherData.timezone,
          timezone_offset: weatherData.timezone_offset,
          current: weatherData.current,
          daily: weatherData.daily,
        },
      };

      // Remove the old entry and add the updated one
      setWeatherHistory((prev) => {
        const filtered = prev.filter(
          (item) =>
            item.city.toLowerCase() !== city.toLowerCase() ||
            item.country !== country,
        );
        return [updatedEntry, ...filtered];
      });
    } catch (error) {
      console.error("Error refreshing weather:", error);
      throw error;
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherHistory,
        addToHistory,
        clearHistory,
        removeFromHistory,
        refreshWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
