import type { GeocodingLocation } from "../types/weather";

interface GeocodingResultProps {
  result: GeocodingLocation | null;
  error: string | null;
  loading: boolean;
}

const GeocodingResult = ({ result, error, loading }: GeocodingResultProps) => {
  if (loading) {
    return (
      <div className="shadow-custom flex w-full items-center justify-center gap-3 rounded-[20px] bg-white/10 p-6 backdrop-blur-2xl">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shadow-custom flex w-full items-center justify-center gap-3 rounded-[20px] bg-red-400/20 p-6 backdrop-blur-2xl">
        <div className="text-red-700">{error}</div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <div className="shadow-custom flex w-full items-center justify-between gap-3 rounded-[20px] bg-white/10 p-6 backdrop-blur-2xl">
      <div className="flex flex-col text-white">
        <div className="text-lg font-semibold">
          {result.name}, {result.country}
        </div>
        <div className="text-sm opacity-80">
          {result.state && `${result.state}, `}
          Lat: {result.lat.toFixed(4)}, Lon: {result.lon.toFixed(4)}
        </div>
      </div>
    </div>
  );
};

export default GeocodingResult;
