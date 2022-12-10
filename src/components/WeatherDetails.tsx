
type WeatherDataObject = {
    temp: number;
    minTemp: number;
    maxTemp: number;
    feelsLike: number;
    humidity: number;
    clouds: number;
    visibility: number;
    airPressure: number;
    city: string;
    weatherCondition: string;
    weatherDetailCondition: string;
  };

const WeatherDetails = ({minTemp,maxTemp,feelsLike,humidity,clouds,visibility,airPressure,}: WeatherDataObject) => {
  return (
    <div className="mobile:px-5 laptop:px-14 mt-8">
      <h3 className="text-white font-semibold mobile:text-sm laptop:text-base pb-4">Weather Details</h3>
      <div className="flex justify-between pb-4">
        <div className="text-white/60 mobile:text-sm laptop:text-base font-light">Min. temperature</div>
        <div className="text-white mobile:text-sm laptop:text-base">{typeof minTemp === 'number' ? (minTemp - 273.15).toFixed(2) : 'NA' }&deg;</div>
      </div>
      <div className="flex justify-between pb-4">
        <div className="text-white/60 mobile:text-sm laptop:text-base font-light">Max. temperature</div>
        <div className="text-white mobile:text-sm laptop:text-base">{typeof maxTemp === 'number' ? (maxTemp - 273.15).toFixed(2) : 'NA'}&deg;</div>
      </div>
      <div className="flex justify-between pb-4">
        <div className="text-white/60 mobile:text-sm laptop:text-base font-light">Feels like</div>
        <div className="text-white mobile:text-sm laptop:text-base">{typeof feelsLike === 'number' ? (feelsLike - 273.15).toFixed(2) : 'NA'}&deg;</div>
      </div>
      <div className="flex justify-between pb-4">
        <div className="text-white/60 mobile:text-sm laptop:text-base font-light">Humidity</div>
        <div className="text-white mobile:text-sm laptop:text-base">{typeof humidity === 'number' ? humidity + '%' : 'NA'}</div>
      </div>
      <div className="flex justify-between pb-4">
        <div className="text-white/60 mobile:text-sm laptop:text-base font-light">Clouds</div>
        <div className="text-white mobile:text-sm laptop:text-base">{typeof clouds === 'number' ? clouds + '%' : 'NA'}</div>
      </div>
      <div className="flex justify-between pb-4">
        <div className="text-white/60 mobile:text-sm laptop:text-base font-light">Visibility</div>
        <div className="text-white mobile:text-sm laptop:text-base">{typeof visibility === 'number' ? (visibility/1000) + 'km' : 'NA'}</div>
      </div>
      <div className="flex justify-between pb-4">
        <div className="text-white/60 mobile:text-sm laptop:text-base font-light">Air pressure</div>
        <div className="text-white mobile:text-sm laptop:text-base">{typeof airPressure === 'number' ? airPressure + 'hPa' : 'NA'}</div>
      </div>

    </div>
  )
}

export default WeatherDetails
