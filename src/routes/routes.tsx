import { CityPage } from '@/pages/city-page'
import WeatherPage from '@/pages/weather-dashboard'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<WeatherPage />} />
        <Route path="/city/:cityName" element={<CityPage />} />
    </Routes>
    
  )
}

export default Router