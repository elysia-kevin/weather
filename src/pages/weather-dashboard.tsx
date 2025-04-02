import WeatherSkeleton from "@/components/loading-skeleton";
import { Button } from "@/components/ui/button"
import { useGeolocation } from "@/hooks/use-geolocation"
import { AlertCircle, AlertTriangle, MapPin, RefreshCw } from "lucide-react"
import { JSX } from "react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { useForecastQuery, useReverseGeocodeQuery, useWeatherQuery } from "@/hooks/use-weather";
import CurrentWeather from '@/components/current-weather';
import HourlyTemperature from "@/components/hourly-temperature";
import WeatherDetails from "@/components/weather-detail";
import WeatherForecast from "@/components/weather-forecast";
import { FavoriteCities } from "@/components/favorite-cities";



function WeatherPage(): JSX.Element {

  const {
    coordinates,
    error: locationError,
    getLocation, isLoading:
    locationLoading
  } = useGeolocation();


  const locationQuery = useReverseGeocodeQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  const weatherQuery = useWeatherQuery(coordinates);

  function handleRefresh() {
    getLocation();
    if (coordinates) {
      weatherQuery.refetch();
      locationQuery.refetch();
      forecastQuery.refetch();
    }
  }

   const locationName = locationQuery.data?.[0];

   console.log(locationName);
   console.log(weatherQuery.data);

   if (locationLoading) {
    return <WeatherSkeleton />
  }

  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4 items-center">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

 

  if (!coordinates) {
    return (
      <Alert>
        <MapPin className="h-4 w-4" />
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Please enable location access to see your local weather.</p>
          <Button variant="outline" onClick={getLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please try again.</p>
          <Button variant="outline" onClick={handleRefresh} className="w-fit">
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

  if (!weatherQuery.data || !forecastQuery.data) {
    return <WeatherSkeleton />
  }

  return (
    <section className="space-y-4">
      {/* favorite city */}
      <FavoriteCities />
      <article className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight ">My Location</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={handleRefresh}
          disabled={weatherQuery.isFetching || forecastQuery.isFetching}
        >
          <RefreshCw className={`h-4 w-4 ${weatherQuery.isFetching ? "animate-spin" : ""}`} />
        </Button>

      </article>
      <section className="grid gap-6">
        <article className="flex flex-col lg:flex-row gap-4">
          {/* current weather */}
          <CurrentWeather data={weatherQuery.data} locationName={locationName} />
          {/* hourly temperature */}
          <HourlyTemperature data={forecastQuery.data}/>
        </article>
        <article className="grid gap-6 md:grid-cols-2 items-start">
          {/* details */}
          <WeatherDetails data={weatherQuery.data} />
          {/* forecast */}
          <WeatherForecast data={forecastQuery.data} />
        </article>
      </section>
    </section>

  )
}

export default WeatherPage