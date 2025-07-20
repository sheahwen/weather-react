import { useState } from "react";
import { capitalizeFirstChar, formatTimestamp } from "../utils/string";
import { useWeatherContext } from "../context/WeatherContext";

const History = () => {
  const { weatherHistory } = useWeatherContext();

  if (weatherHistory.length === 0) {
    return (
      <div className="mt-4 rounded-[24px] bg-white/20 p-5">
        <div className="mb-4 text-sm">Search History</div>
        <div className="text-gray-custom py-4 text-center">
          No search history yet
        </div>
      </div>
    );
  }
  return (
    <div className="mt-4 rounded-[24px] bg-white/20 p-5">
      <div className="mb-4 text-sm">Search History</div>
      <div className="flex flex-col gap-4">
        {weatherHistory.map((data: any) => (
          <HistoryItem key={data.searched_at} data={data} />
        ))}
      </div>
    </div>
  );
};

export default History;

const HistoryItem = ({ data }: any) => {
  const { removeFromHistory, refreshWeather } = useWeatherContext();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refreshWeather(
        data.city,
        data.country,
        data.weather.lat,
        data.weather.lon,
      );
    } catch (error) {
      console.error("Failed to refresh weather:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleDelete = () => {
    removeFromHistory(data.searched_at);
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/40 p-4 transition-all duration-300 ease-in-out hover:scale-102 hover:bg-white/60">
      <div className="flex flex-1 flex-col justify-between sm:flex-row">
        <div className="text-sm">
          {capitalizeFirstChar(data.city)}, {data.country}
        </div>
        <div className="text-[10px] sm:text-right sm:text-base">
          {formatTimestamp(data.searched_at)}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="text-gray-custom cursor-pointer rounded-full bg-white p-2 transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            title="Refresh weather"
          >
            {isRefreshing ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin"
              >
                <path
                  d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
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
            )}
          </button>
          <button
            onClick={handleDelete}
            className="text-gray-custom cursor-pointer rounded-full bg-white p-2 transition-all duration-200 hover:bg-red-100 hover:text-red-600"
            title="Delete from history"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H5H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
