import { GeocodingResponse, WeatherData } from "@/api/types"


interface CurrentWeatherProps{
data: WeatherData,
locationName?:GeocodingResponse
}
const CurrentWeather = ({data, locationName}: CurrentWeatherProps) => {
  return (
    <div>
      CurrentWeather
    </div>
  )
}

export default CurrentWeather
