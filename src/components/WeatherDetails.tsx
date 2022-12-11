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

const WeatherDetails = ({
  minTemp,
  maxTemp,
  feelsLike,
  humidity,
  clouds,
  visibility,
  airPressure,
}: WeatherDataObject) => {
  return (
    <>
      <div className="smmobile:hidden mobile:hidden tablet:hidden laptop:block laptop:px-14 mt-8">
        <h3 className="text-white font-semibold laptop:text-base pb-4">
          Weather Details
        </h3>
        <div className="flex justify-between pb-4">
          <div className="text-white/60 laptop:text-base font-light">
            Min. temperature
          </div>
          <div className="text-white laptop:text-base">
            {typeof minTemp === "number" ? (minTemp - 273.15).toFixed(2) : "NA"}
            &deg;
          </div>
        </div>
        <div className="flex justify-between pb-4">
          <div className="text-white/60 laptop:text-base font-light">
            Max. temperature
          </div>
          <div className="text-white laptop:text-base">
            {typeof maxTemp === "number" ? (maxTemp - 273.15).toFixed(2) : "NA"}
            &deg;
          </div>
        </div>
        <div className="flex justify-between pb-4">
          <div className="text-white/60 laptop:text-base font-light">
            Feels like
          </div>
          <div className="text-white laptop:text-base">
            {typeof feelsLike === "number"
              ? (feelsLike - 273.15).toFixed(2)
              : "NA"}
            &deg;
          </div>
        </div>
        <div className="flex justify-between pb-4">
          <div className="text-white/60 laptop:text-base font-light">
            Humidity
          </div>
          <div className="text-white laptop:text-base">
            {typeof humidity === "number" ? humidity + "%" : "NA"}
          </div>
        </div>
        <div className="flex justify-between pb-4">
          <div className="text-white/60 laptop:text-base font-light">
            Clouds
          </div>
          <div className="text-white laptop:text-base">
            {typeof clouds === "number" ? clouds + "%" : "NA"}
          </div>
        </div>
        <div className="flex justify-between pb-4">
          <div className="text-white/60 laptop:text-base font-light">
            Visibility
          </div>
          <div className="text-white laptop:text-base">
            {typeof visibility === "number" ? visibility / 1000 + "km" : "NA"}
          </div>
        </div>
        <div className="flex justify-between pb-4">
          <div className="text-white/60 laptop:text-base font-light">
            Air pressure
          </div>
          <div className="text-white laptop:text-base">
            {typeof airPressure === "number" ? airPressure + " hPa" : "NA"}
          </div>
        </div>
      </div>

      <div className="laptop:hidden mobile:block mt-8 px-5">
        <h3 className="text-white font-semibold laptop:text-base pb-4">
          Weather Details
        </h3>
        <div className="grid smmobile:grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center bg-white/10 py-3 rounded-lg">
            <div className="text-white text-xl">
              {typeof minTemp === "number"
                ? (minTemp - 273.15).toFixed(2)
                : "NA"}
              &deg;
            </div>
            <div className="text-white/60 text-sm">Min. temperature</div>
          </div>

          <div className="flex flex-col items-center justify-center bg-white/10 py-3 rounded-lg">
            <div className="text-white text-xl">
              {typeof minTemp === "number"
                ? (maxTemp - 273.15).toFixed(2)
                : "NA"}
              &deg;
            </div>
            <div className="text-white/60 text-sm">Max. temperature</div>
          </div>


          <div className="flex flex-col items-center justify-center bg-white/10 py-3 rounded-lg">
            <div className="text-white text-xl">
            {typeof feelsLike === "number"
              ? (feelsLike - 273.15).toFixed(2)
              : "NA"}
              &deg;
            </div>
            <div className="text-white/60 text-sm">Feels like</div>
          </div>

          <div className="flex flex-col items-center justify-center bg-white/10 py-3 rounded-lg">
            <div className="text-white text-xl">
            {typeof humidity === "number" ? humidity + "%" : "NA"}
            </div>
            <div className="text-white/60 text-sm">Humidity</div>
          </div>

          <div className="flex flex-col items-center justify-center bg-white/10 py-3 rounded-lg">
            <div className="text-white text-xl">
            {typeof clouds === "number" ? clouds + "%" : "NA"}
            </div>
            <div className="text-white/60 text-sm">Clouds</div>
          </div>

          <div className="flex flex-col items-center justify-center bg-white/10 py-3 rounded-lg">
            <div className="text-white text-xl">
            {typeof visibility === "number" ? visibility / 1000 + "km" : "NA"}
            </div>
            <div className="text-white/60 text-sm">Visibility</div>
          </div>

          <div className="flex flex-col items-center justify-center bg-white/10 py-3 rounded-lg">
            <div className="text-white text-xl">
            {typeof airPressure === "number" ? airPressure + " hPa" : "NA"}
            </div>
            <div className="text-white/60 text-sm">Air pressure</div>
          </div>

        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
