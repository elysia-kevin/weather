import { useQuery } from '@tanstack/react-query';
import { Coordinates } from '../api/types';
import { weatherAPI } from '@/api/weather';

export const WEATHER_KEY={
    weather: (coords: Coordinates)=> ["weather",coords] as const,
    forecast: (coords: Coordinates)=> ["forecast", coords] as const,
    location: (coords: Coordinates)=> ["location", coords] as const,
    search: (query: string) => ["location-search", query] as const
} as const ;

export function useWeatherQuery(coordinates:Coordinates | null){
    return useQuery({
        queryKey: WEATHER_KEY.weather(coordinates ?? {lat: 0, lon:0}),
        queryFn:()=>coordinates? weatherAPI.getCurrentWeather(coordinates): null,
        enabled: !!coordinates,
    });
};

export function useForecastQuery(coordinates:Coordinates | null){
    return useQuery({
        queryKey: WEATHER_KEY.forecast(coordinates ?? {lat: 0, lon:0}),
        queryFn:()=>coordinates? weatherAPI.getForcecast(coordinates): null,
        enabled: !!coordinates,
    });
};

export function useReverseGeocodeQuery(coordinates:Coordinates | null){
    return useQuery({
        queryKey: WEATHER_KEY.location(coordinates ?? {lat: 0, lon:0}),
        queryFn:()=>coordinates? weatherAPI.reverseGeocode(coordinates): null,
        enabled: !!coordinates,
    });
};

export function useLocationSearch(query: string){
    return useQuery({
        queryKey: WEATHER_KEY.search(query),
        queryFn: ()=> weatherAPI.searchLocation(query),
        enabled: query.length >=3

    });
}