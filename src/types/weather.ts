// Geocoding API response structure
export interface GeocodingLocation {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
}

// Weather condition structure
export interface WeatherCondition {
  main: string;
  description: string;
  icon: string;
}

// Current weather data structure
export interface CurrentWeather {
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  weather: WeatherCondition[];
}

// Daily weather forecast structure
export interface DailyWeather {
  temp: {
    max: number;
    min: number;
  };
  humidity: number;
  weather: WeatherCondition[];
  summary: string;
}

// Complete weather information structure
export interface WeatherInfo {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeather;
  daily: DailyWeather[];
}

// Weather history entry structure
export interface WeatherData {
  searched_at: number;
  city: string;
  country: string;
  weather: WeatherInfo;
}
