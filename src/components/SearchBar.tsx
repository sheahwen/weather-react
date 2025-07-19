import { useState } from "react";
import axios from "axios";
import { getGeocodingData } from "../config/api";
import GeocodingResult from "./GeocodingResult";
import TextInput from "./TextInput";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      setResult(null);
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const query = countryCode.trim() ? `${city},${countryCode}` : city;
      const data = await getGeocodingData(query);

      if (data && data.length > 0) {
        setResult(data[0]);
      } else {
        setError("Location not found");
      }
    } catch (err) {
      console.error("Geocoding error:", err);
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          setError("Location not found");
        } else if (err.response?.status === 401) {
          setError("Invalid API key");
        } else {
          setError(`Error: ${err.response?.status || "Network error"}`);
        }
      } else {
        setError("Error fetching location data");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-[60px] w-full gap-5">
        <div className="shadow-custom flex w-full items-center justify-around gap-3 rounded-[20px] bg-white/10 pl-6 backdrop-blur-2xl">
          <TextInput
            inputId="city-input"
            label="City"
            placeholder="Tokyo"
            value={city}
            onChange={setCity}
            className="w-[50%]"
            required
          />
          <TextInput
            inputId="country-input"
            label="Country Code"
            placeholder="JP"
            value={countryCode}
            onChange={setCountryCode}
            className="w-[50%]"
          />
        </div>
        <button
          onClick={handleSearch}
          onKeyPress={handleKeyPress}
          className="bg-purple-custom flex-center h-[60px] w-[60px] cursor-pointer rounded-[20px] border-none text-white transition-all duration-300 ease-in-out hover:bg-purple-600"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <GeocodingResult result={result} error={error} loading={loading} />
    </div>
  );
};

export default SearchBar;
