import { GeocodingResponse, WeatherData } from '@/api/types'
import { JSX } from 'react'
import { Card, CardContent } from './ui/card';
import { ArrowDown, ArrowUp, Droplets, Wind } from 'lucide-react';

interface CurrentWeatherProps {
    data: WeatherData,
    locationName?: GeocodingResponse
}

function CurrentWeather({ data, locationName }: CurrentWeatherProps): JSX.Element {

    const {
        weather: [currentWeather],
        main: { temp, feels_like, temp_min, temp_max, humidity },
        wind: { speed },
    } = data;


    // Format temperature
    const formatTemp = (temp: number) => `${Math.round(temp)}°`;

    return (
        <Card className='overflow-hidden'>
            <CardContent className='p-6'>
                <section className='grid gap-6 md:grid-cols-2'>
                    <section className='space-y-4' >
                        <article className='space-y-2'>
                            <article className='flex items-center justify-between'>
                                <h2 className='text-2xl font-bold tracking-tight'>
                                    {locationName?.name}
                                </h2>
                                {locationName?.state && (
                                    <span className='text-muted-foreground mx-1'>
                                        {locationName.state}, {locationName?.country}
                                    </span>
                                )}
                            </article>
                        </article>
                        <article className="flex items-center gap-2">
                            <p className="text-7xl font-bold tracking-tighter">
                                {formatTemp(temp)}
                            </p>
                            <article className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">
                                    Feels like {formatTemp(feels_like)}
                                </p>
                                <span className="flex items-center gap-1 text-blue-500">
                                    <ArrowDown className="h-3 w-3" />
                                    {formatTemp(temp_min)}
                                </span>
                                <span className="flex items-center gap-1 text-red-500">
                                    <ArrowUp className="h-3 w-3" />
                                    {formatTemp(temp_max)}
                                </span>
                            </article>
                        </article>
                        <section className="grid grid-cols-2 gap-4">
                            <article className="flex items-center gap-2">
                                <Droplets className="h-4 w-4 text-blue-500" />
                                <article className="space-y-0.5">
                                    <p className="text-sm font-medium">Humidity</p>
                                    <p className="text-sm text-muted-foreground">{humidity}%</p>
                                </article>
                            </article>
                            <article className="flex items-center gap-2">
                                <Wind className="h-4 w-4 text-blue-500" />
                                <article className="space-y-0.5">
                                    <p className="text-sm font-medium">Wind Speed</p>
                                    <p className="text-sm text-muted-foreground">{speed} m/s</p>
                                </article>
                            </article>
                        </section>
                    </section>
                    <article className='flex flex-col items-center justify-center'>
                        <figure className='relative flex aspect-square w-full max-w-[200px] items-center justify-center'>
                            <img
                                src={`https://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`}
                                alt={currentWeather.description}
                                className="h-full w-full object-contain" />
                            <figcaption className="absolute bottom-0 text-center text-sm font-medium capitalize">
                                {currentWeather.description}
                            </figcaption>
                        </figure>
                    </article>
                </section>
            </CardContent>
        </Card>
    );
}

export default CurrentWeather