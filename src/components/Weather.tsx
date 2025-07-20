import { useWeatherContext } from "../context/WeatherContext";
import { capitalizeFirstChar, formatTimestamp } from "../utils/string";
import History from "./History";
import WeatherIcon from "./WeatherIcon";

const Weather = () => {
  const { weatherHistory } = useWeatherContext();
  const data = weatherHistory.length > 0 ? weatherHistory[0] : null;

  return (
    <div className="relative mt-10 flex w-full flex-col gap-2 rounded-[20px] border border-white/50 bg-white/20 p-6 sm:rounded-[40px] sm:p-10">
      <div>Today&#39;s Weather</div>
      {data ? (
        <>
          <div className="hidden flex-col gap-2 sm:flex">
            <WebLayout data={data} />
          </div>
          <div className="flex flex-col gap-2 sm:hidden">
            <MobileLayout data={data} />
          </div>
        </>
      ) : (
        <div className="text-gray-custom py-8 text-center">
          Search for a city to see weather information
        </div>
      )}

      <History />

      <div className="absolute -top-10 right-10 z-20 sm:right-20">
        <WeatherIcon weather={data?.weather?.daily?.[0]?.weather?.[0].main} />
      </div>
    </div>
  );
};

export default Weather;

const WebLayout = ({ data }: any) => {
  return (
    <>
      <div className="text-purple-custom text-[60px] leading-none font-bold">
        {data?.weather?.current?.temp.toFixed(0)}&deg;
      </div>
      <div className="text-sm">
        H: {data?.weather?.daily?.[0]?.temp?.max.toFixed(0)}
        &deg; L: {data?.weather?.daily?.[0]?.temp?.min.toFixed(0)}
        &deg;
      </div>
      <div className="text-gray-custom flex flex-row justify-between gap-2">
        <div className="font-semibold">
          {capitalizeFirstChar(data?.city)}, {data?.country.toUpperCase()}
        </div>
        <div className="text-sm">{formatTimestamp(data?.searched_at)}</div>
        <div>Humidity: {data?.weather?.daily?.[0]?.humidity}%</div>
        <div>{data?.weather?.daily?.[0]?.weather?.[0].main}</div>
      </div>
      <div className="text-sm font-bold">
        {data?.weather?.daily?.[0]?.summary}
      </div>
    </>
  );
};

const MobileLayout = ({ data }: any) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="gap flex flex-col">
          <div className="text-purple-custom text-[60px] leading-none font-bold">
            {data?.weather?.current?.temp.toFixed(0)}&deg;
          </div>
          <div className="text-sm">
            H: {data?.weather?.daily?.[0]?.temp?.max.toFixed(0)}
            &deg; L: {data?.weather?.daily?.[0]?.temp?.min.toFixed(0)}
            &deg;
          </div>
          <div className="text-gray-custom font-semibold">
            {capitalizeFirstChar(data?.city)}, {data?.country.toUpperCase()}
          </div>
        </div>
        <div className="text-gray-custom self-end text-right">
          <div className="gap flex flex-col">
            <div className="text-sm">{formatTimestamp(data?.searched_at)}</div>
            <div>Humidity: {data?.weather?.daily?.[0]?.humidity}%</div>
            <div>{data?.weather?.daily?.[0]?.weather?.[0].main}</div>
          </div>
        </div>
      </div>
      <div className="mt-1 text-sm font-bold">
        {data?.weather?.daily?.[0]?.summary}
      </div>
    </>
  );
};
