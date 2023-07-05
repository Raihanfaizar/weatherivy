import SimpleWeather from "../components/SimpleWeather";
import getUnit from "../utils/getUnit";

export default ForecastWrapper = ({ dataWeather, tempUnit }) => {
  return dataWeather.list.map(data => {
    return <SimpleWeather
      key={`${data.weather[0].main}-${data.dt_txt}`}
      icon={data.weather[0].icon}
      temp={getUnit(tempUnit, data.main.temp)}
      date={data.dt_txt}
      desc={data.weather[0].description}
    />
  });
}