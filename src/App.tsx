import "./App.css";
import Background from "./components/Background";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="min-[100vh] flex-center relative p-5">
        <Background />

        {/* Main Content */}
        <div className="screen-max-width flex w-full flex-col gap-5">
          <SearchBar />

          <Weather />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
