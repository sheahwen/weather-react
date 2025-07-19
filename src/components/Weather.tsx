import { MOCK_DATA } from "../mock-data";
import { capitalizeFirstChar } from "../utils/string";
import { convertToCelcius } from "../utils/temperature";

const Weather = () => {
  const data = MOCK_DATA[0];

  return (
    <div className="flex w-full flex-col gap-2 rounded-[40px] border border-white/50 bg-white/20 p-10">
      <div>Today&#39;s Weather</div>
      <div className="text-purple-custom text-[60px] leading-none font-bold">
        {convertToCelcius(data?.weather?.current?.temp).toFixed(1)}&deg;
      </div>
      <div className="text-sm">
        H: {convertToCelcius(data?.weather?.daily?.[0]?.temp?.max).toFixed(1)}
        &deg; L:{" "}
        {convertToCelcius(data?.weather?.daily?.[0]?.temp?.min).toFixed(1)}
        &deg;
      </div>
      <div className="font-semibold">
        {capitalizeFirstChar(data?.city)}, {data?.country.toUpperCase()}
      </div>
      <div className="text-sm">{data?.searched_at}</div>
      <div className="flex items-center gap-6 text-sm">
        <div>Humidity: {data?.weather?.daily?.[0]?.humidity}%</div>
        <div>{data?.weather?.daily?.[0]?.weather?.[0].main}</div>
      </div>
      <div className="text-sm font-bold">
        {data?.weather?.daily?.[0]?.summary}
      </div>
    </div>
  );
};

export default Weather;
