const WeatherIcon = ({ weather }: { weather: string }) => {
  if (!weather) return <></>;

  switch (weather.toLowerCase()) {
    case "sun":
      return (
        <div className="flex-center relative w-24 sm:w-40">
          <img src="/src/assets/sun.png" alt="Sun" className="z-2 w-full" />
        </div>
      );
    case "clouds":
      return (
        <div className="flex-center relative w-24 sm:w-40">
          <img src="/src/assets/cloud.png" alt="Cloud" className="z-2 w-full" />
        </div>
      );
    case "rain":
      return (
        <div className="flex-center relative w-24 sm:w-40">
          <img src="/src/assets/cloud.png" alt="Cloud" className="z-2 w-full" />

          <div className="rain-drops">
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default WeatherIcon;
