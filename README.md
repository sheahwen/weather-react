# Weather React App

A modern, responsive weather application built with React, TypeScript, and Vite. Get real-time weather information for any city around the world with a beautiful, intuitive interface.

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions and daily forecasts
- **Global City Search**: Search for any city worldwide with optional country code specification
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Weather History**: View your recent weather searches
- **Beautiful UI**: Modern glassmorphism design with dynamic backgrounds
- **Geolocation Support**: Uses OpenWeatherMap's geocoding API for accurate location data

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- OpenWeatherMap API key

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd weather-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` to see the application running.

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🌐 API Integration

This application uses the **OpenWeatherMap API** for weather data and geocoding services.

### Required APIs

1. **Geocoding API** - Converts city names to coordinates
   - Endpoint: `http://api.openweathermap.org/geo/1.0/direct`
   - Used for: Converting city names to latitude/longitude coordinates

2. **One Call API 3.0** - Retrieves comprehensive weather data
   - Endpoint: `https://api.openweathermap.org/data/3.0/onecall`
   - Used for: Current weather, daily forecasts, and weather summaries

### Getting an API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Navigate to your API keys section
4. Generate a new API key
5. Add the key to your `.env` file

### API Usage

The app makes the following API calls:

- **Geocoding**: When you search for a city, it first converts the city name to coordinates
- **Weather Data**: Once coordinates are obtained, it fetches current weather and daily forecast
- **Error Handling**: Includes fallback mechanisms and user-friendly error messages

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Background.tsx   # Dynamic background component
│   ├── SearchBar.tsx    # City search functionality
│   ├── Weather.tsx      # Weather display component
│   ├── WeatherIcon.tsx  # Weather condition icons
│   ├── History.tsx      # Search history component
│   └── ...
├── config/
│   └── api.ts          # API configuration and endpoints
├── context/
│   └── WeatherContext.tsx  # React context for state management
├── utils/
│   └── string.ts       # Utility functions
└── assets/             # Images and static assets
```

## 🎨 Technologies Used

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **OpenWeatherMap API** - Weather data provider

## 📱 Features in Detail

### Search Functionality

- Enter any city name (e.g., "Tokyo", "New York")
- Optional country code for more specific results (e.g., "Tokyo,JP")
- Real-time geocoding with error handling
- Search history tracking

### Weather Display

- Current temperature with high/low daily range
- Weather condition with descriptive icons
- Humidity percentage
- Weather summary
- Responsive layouts for desktop and mobile

### User Experience

- Loading states during API calls
- Error messages for invalid searches
- Smooth animations and transitions
- Glassmorphism design elements
- Dynamic backgrounds based on weather conditions

## 🔒 Environment Variables

| Variable                   | Description                 | Required |
| -------------------------- | --------------------------- | -------- |
| `VITE_OPENWEATHER_API_KEY` | Your OpenWeatherMap API key | Yes      |

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Vite](https://vitejs.dev/) for the excellent build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
