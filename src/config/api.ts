import axios from "axios";

export const OPENWEATHER_API_KEY =
  import.meta.env.VITE_OPENWEATHER_API_KEY || "OPENWEATHER_API_KEY";

export const weatherApi = axios.create({
  baseURL: "http://api.openweathermap.org",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// API endpoints
export const GEOCODING_API_URL = "http://api.openweathermap.org/geo/1.0/direct";

// https://openweathermap.org/api/geocoding-api
export const buildGeocodingUrl = (query: string, limit: number = 1) => {
  return `${GEOCODING_API_URL}?q=${encodeURIComponent(query)}&limit=${limit}&appid=${OPENWEATHER_API_KEY}`;
};

export const getGeocodingData = async (query: string, limit: number = 1) => {
  const response = await weatherApi.get("/geo/1.0/direct", {
    params: {
      q: query,
      limit,
      appid: OPENWEATHER_API_KEY,
    },
  });
  return response.data;
};
