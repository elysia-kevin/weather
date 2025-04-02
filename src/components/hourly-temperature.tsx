import { ForecastData } from '@/api/types';
import  { JSX } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { format } from "date-fns";

interface HourlyTemperatureProps{
    data: ForecastData;
}

interface ChartData {
    time: string;
    temp: number;
    feels_like: number;
  }

function HourlyTemperature({data}: HourlyTemperatureProps):JSX.Element {
    const chartData: ChartData[] = data.list.slice(0,8).map((item)=>({
        time: format(new Date(item.dt * 1000), "ha"),
        temp: Math.round(item.main.temp),
        feels_like: Math.round(item.main.feels_like),
    }));

  return (
    <Card className='flex-1'>
        <CardHeader>
            <CardTitle>
                Today's Temperature
            </CardTitle>
        </CardHeader>
        <CardContent>
            <section className="h-[200px] w-full">
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <LineChart data={chartData}>
                    <XAxis
                dataKey="time"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}°`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <section className="rounded-lg border bg-background p-2 shadow-sm">
                        <section className="grid grid-cols-2 gap-2">
                          <article className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Temperature
                            </span>
                            <span className="font-bold">
                              {payload[0].value}°
                            </span>
                          </article>
                          <article className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Feels Like
                            </span>
                            <span className="font-bold">
                              {payload[1].value}°
                            </span>
                          </article>
                        </section>
                      </section>
                    );
                  }
                  return null;
                
                }}
              />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="feels_like"
                stroke="#64748b"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
              />
                    </LineChart>
                </ResponsiveContainer>
            </section>
        </CardContent>
    </Card>
  )
}

export default HourlyTemperature