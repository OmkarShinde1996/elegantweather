import { useEffect, useState } from "react";
// import { LazyLoadComponent } from 'react-lazy-load-image-component';
import toast, { Toaster } from "react-hot-toast";
import LocationList from "../components/LocationList";
import WeatherDetails from "../components/WeatherDetails";
import DateTime from "../utility/dateTimeUtility";

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

const Home = () => {
  const [enteredCity, setEnteredCity] = useState("mumbai");
  const [weatherIcon, setWeatherIcon] = useState("01d");
  const [weatherData, setWeatherData] = useState<WeatherDataObject>({
    temp: 0,
    minTemp: 0,
    maxTemp: 0,
    feelsLike: 0,
    humidity: 0,
    clouds: 0,
    visibility: 0,
    airPressure: 0,
    city: "NA",
    weatherCondition: "NA",
    weatherDetailCondition: "NA",
  });

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    // const API_KEY = import.meta.env.VITE_API_KEY;

    // const URL = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${API_KEY}`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=8408438a6bcb310d095127b108a79bc2`;
    return fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        setWeatherData({
          temp: data.main.temp,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          feelsLike: data.main.feels_like,
          humidity: data.main.humidity,
          clouds: data.clouds.all,
          visibility: data.visibility,
          airPressure: data.main.pressure,
          city: data.name,
          weatherCondition: data.weather[0].main,
          weatherDetailCondition: data.weather[0].description,
        });
        setEnteredCity("");
        setWeatherConditionIcon(data.weather[0].description);
      })
      .catch(() => {
        toast.error("Please enter valid city name");
      });
  };

  const fetchWeatherDataByClick = async (cityName: string) => {
    // const API_KEY = import.meta.env.VITE_API_KEY;

    // const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8408438a6bcb310d095127b108a79bc2`;
    return fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        setWeatherData({
          temp: data.main.temp,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          feelsLike: data.main.feels_like,
          humidity: data.main.humidity,
          clouds: data.clouds.all,
          visibility: data.visibility,
          airPressure: data.main.pressure,
          city: data.name,
          weatherCondition: data.weather[0].main,
          weatherDetailCondition: data.weather[0].description,
        });
        setEnteredCity("");
        setWeatherConditionIcon(data.weather[0].description);
      })
      .catch(() => {
        toast.error("Please enter valid city name");
      });
  };

  const setWeatherConditionIcon = (receivedWeatherCondition: string) => {
    receivedWeatherCondition === "thunderstorm with light rain" ||
    receivedWeatherCondition === "thunderstorm with rain" ||
    receivedWeatherCondition === "thunderstorm with heavy rain" ||
    receivedWeatherCondition === "light thunderstorm" ||
    receivedWeatherCondition === "thunderstorm" ||
    receivedWeatherCondition === "heavy thunderstorm" ||
    receivedWeatherCondition === "ragged thunderstorm" ||
    receivedWeatherCondition === "thunderstorm with light drizzle" ||
    receivedWeatherCondition === "thunderstorm with drizzle" ||
    receivedWeatherCondition === "thunderstorm with heavy drizzle"
      ? setWeatherIcon("11d")
      : receivedWeatherCondition === "light intensity drizzle" ||
        receivedWeatherCondition === "drizzle" ||
        receivedWeatherCondition === "heavy intensity drizzle" ||
        receivedWeatherCondition === "light intensity drizzle rain" ||
        receivedWeatherCondition === "drizzle rain" ||
        receivedWeatherCondition === "heavy intensity drizzle rain" ||
        receivedWeatherCondition === "shower rain and drizzle" ||
        receivedWeatherCondition === "heavy shower rain and drizzle" ||
        receivedWeatherCondition === "shower drizzle" ||
        receivedWeatherCondition === "light intensity shower rain" ||
        receivedWeatherCondition === "shower rain" ||
        receivedWeatherCondition === "heavy intensity shower rain" ||
        receivedWeatherCondition === "ragged shower rain"
      ? setWeatherIcon("09d")
      : receivedWeatherCondition === "light rain" ||
        receivedWeatherCondition === "moderate rain" ||
        receivedWeatherCondition === "heavy intensity rain" ||
        receivedWeatherCondition === "very heavy rain" ||
        receivedWeatherCondition === "extreme rain"
      ? setWeatherIcon("10d")
      : receivedWeatherCondition === "freezing rain" ||
        receivedWeatherCondition === "light snow" ||
        receivedWeatherCondition === "Snow" ||
        receivedWeatherCondition === "Heavy snow" ||
        receivedWeatherCondition === "Sleet" ||
        receivedWeatherCondition === "Light shower sleet" ||
        receivedWeatherCondition === "Shower sleet" ||
        receivedWeatherCondition === "Light rain and snow" ||
        receivedWeatherCondition === "Rain and snow" ||
        receivedWeatherCondition === "Light shower snow" ||
        receivedWeatherCondition === "Shower snow" ||
        receivedWeatherCondition === "Heavy shower snow"
      ? setWeatherIcon("13d")
      : receivedWeatherCondition === "mist" ||
        receivedWeatherCondition === "Smoke" ||
        receivedWeatherCondition === "Haze" ||
        receivedWeatherCondition === "sand/ dust whirls" ||
        receivedWeatherCondition === "fog" ||
        receivedWeatherCondition === "sand" ||
        receivedWeatherCondition === "dust" ||
        receivedWeatherCondition === "volcanic ash" ||
        receivedWeatherCondition === "squalls" ||
        receivedWeatherCondition === "tornado"
      ? setWeatherIcon("50d")
      : receivedWeatherCondition === "clear sky"
      ? setWeatherIcon("01d")
      : receivedWeatherCondition === "few clouds: 11-25%"
      ? setWeatherIcon("02d")
      : receivedWeatherCondition === "scattered clouds: 25-50%"
      ? setWeatherIcon("03d")
      : receivedWeatherCondition === "broken clouds: 51-84%"
      ? setWeatherIcon("04d")
      : setWeatherIcon("04d");
  };

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      {/* <LazyLoadComponent> */}
      <div
        className="laptop:w-screen laptop:h-screen bg-no-repeat bg-center bg-cover relative"
        style={{
          backgroundImage: `url("/elegantweather/${weatherData?.weatherCondition.toLowerCase()}.jpg")`,
          transitionDuration: "1.2s",
        }}
      >
        <h1
          className="absolute font-semibold mobile:text-lg laptop:text-2xl mt-6 ml-8"
          style={{
            fontFamily: "Comfortaa",
            fontStyle: "normal",
            fontStretch: "normal",
            color:
              weatherData?.weatherCondition === "Snow" ||
              weatherData?.weatherCondition === "fog" ||
              weatherData?.weatherCondition === "Haze"
                ? "#22262B"
                : weatherData?.weatherCondition === "Rain" ||
                  weatherData?.weatherCondition === "Drizzle" ||
                  weatherData?.weatherCondition === "Tornado" ||
                  weatherData?.weatherCondition === "Thunderstorm" ||
                  weatherData?.weatherCondition === "Sunny" ||
                  weatherData?.weatherCondition === "Mist" ||
                  weatherData?.weatherCondition === "Squall" ||
                  weatherData?.weatherCondition === "Clear" ||
                  weatherData?.weatherCondition === "Ash" ||
                  weatherData?.weatherCondition === "Smoke" ||
                  weatherData?.weatherCondition === "Sand" ||
                  weatherData?.weatherCondition === "Clouds"
                ? "#FFF"
                : "#2D8ECB",
            transitionDuration: "1.2s",
          }}
        >
          elegantweather
        </h1>
        <div className="flex mobile:flex-col laptop:flex-row mobile:mt-24 mobile:ml-8 laptop:items-center absolute laptop:ml-20 laptop:mt-[75vh] text-white drop-shadow-lg">
          <div
            className="font-semibold mobile:text-4xl tablet:text-4xl laptop:text-8xl laptop:mr-5"
            style={{
              color:
                weatherData?.weatherCondition === "Snow" ||
                weatherData?.weatherCondition === "fog" ||
                weatherData?.weatherCondition === "Haze"
                  ? "#22262B"
                  : weatherData?.weatherCondition === "Rain" ||
                    weatherData?.weatherCondition === "Drizzle" ||
                    weatherData?.weatherCondition === "Tornado" ||
                    weatherData?.weatherCondition === "Thunderstorm" ||
                    weatherData?.weatherCondition === "Sunny" ||
                    weatherData?.weatherCondition === "Mist" ||
                    weatherData?.weatherCondition === "Squall" ||
                    weatherData?.weatherCondition === "Clear" ||
                    weatherData?.weatherCondition === "Ash" ||
                    weatherData?.weatherCondition === "Smoke" ||
                    weatherData?.weatherCondition === "Sand" ||
                    weatherData?.weatherCondition === "Clouds"
                  ? "#FFF"
                  : "#2D8ECB",
              transitionDuration: "1.2s",
            }}
          >
            {typeof weatherData?.temp === "number"
              ? (weatherData.temp - 273.15).toFixed(2)
              : "NA"}{" "}
            &deg;
          </div>{" "}
          {/*temperature*/}
          <div
            className="flex flex-col laptop:mr-8 laptop:items-center justify-center mt-4"
            style={{
              color:
                weatherData?.weatherCondition === "Snow" ||
                weatherData?.weatherCondition === "fog" ||
                weatherData?.weatherCondition === "Haze"
                  ? "#22262B"
                  : weatherData?.weatherCondition === "Rain" ||
                    weatherData?.weatherCondition === "Drizzle" ||
                    weatherData?.weatherCondition === "Tornado" ||
                    weatherData?.weatherCondition === "Thunderstorm" ||
                    weatherData?.weatherCondition === "Sunny" ||
                    weatherData?.weatherCondition === "Mist" ||
                    weatherData?.weatherCondition === "Squall" ||
                    weatherData?.weatherCondition === "Clear" ||
                    weatherData?.weatherCondition === "Ash" ||
                    weatherData?.weatherCondition === "Smoke" ||
                    weatherData?.weatherCondition === "Sand" ||
                    weatherData?.weatherCondition === "Clouds"
                  ? "#FFF"
                  : "#2D8ECB",
              transitionDuration: "1.2s",
            }}
          >
            <div className="font-normal mobile:text-xl laptop:text-5xl">
              {typeof weatherData?.city === "string" ? weatherData.city : "NA"}
            </div>{" "}
            {/*city name*/}
            <div className="font-normal mobile:text-xs tablet:text-sm laptop:text-base">
              {DateTime}
            </div>
          </div>
          <div
            className="flex flex-col laptop:justify-center laptop:items-center laptop:mr-5 mt-6"
            style={{
              color:
                weatherData?.weatherCondition === "Snow" ||
                weatherData?.weatherCondition === "fog" ||
                weatherData?.weatherCondition === "Haze"
                  ? "#22262B"
                  : weatherData?.weatherCondition === "Rain" ||
                    weatherData?.weatherCondition === "Drizzle" ||
                    weatherData?.weatherCondition === "Tornado" ||
                    weatherData?.weatherCondition === "Thunderstorm" ||
                    weatherData?.weatherCondition === "Sunny" ||
                    weatherData?.weatherCondition === "Mist" ||
                    weatherData?.weatherCondition === "Squall" ||
                    weatherData?.weatherCondition === "Clear" ||
                    weatherData?.weatherCondition === "Ash" ||
                    weatherData?.weatherCondition === "Smoke" ||
                    weatherData?.weatherCondition === "Sand" ||
                    weatherData?.weatherCondition === "Clouds"
                  ? "#FFF"
                  : "#2D8ECB",
              transitionDuration: "1.2s",
            }}
          >
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                className="mobile:h-6 laptop:h-10"
              />
            </div>
            {/*weather icon*/}
            <div className="font-normal mobile:text-xs tablet:text-sm laptop:text-base">
              {typeof weatherData?.weatherCondition === "string"
                ? weatherData.weatherCondition
                : "NA"}
            </div>
            {/*weather condition*/}
          </div>
        </div>
        <div className="flex mobile:items-end mobile:pt-80 laptop:pt-0 laptop:justify-end">
          <div className="mobile:h-screen laptop:h-screen mobile:w-screen laptop:w-96 bg-black/30 backdrop-blur-md">
            {/* <InputForm /> */}
            <form className="mobile:pl-5 laptop:pl-14 flex">
              <input
                type="text"
                value={enteredCity}
                onChange={(e) => setEnteredCity(e.target.value)}
                placeholder="Search location..."
                className="placeholder:text-white/60 placeholder:font-light font-light mt-4 h-10 w-[70%] bg-transparent text-white border-b-[0.5px] border-white/70 outline-none"
              />
              <div className="flex justify-end flex-1">
                <button
                  type="button"
                  onClick={fetchWeatherData}
                  className="flex items-center justify-center w-14"
                  style={{
                    background:
                      weatherData?.weatherCondition === "Smoke" ||
                      weatherData?.weatherCondition === "Sand" ||
                      weatherData?.weatherCondition === "Clouds"
                        ? "#F7A74C"
                        : weatherData?.weatherCondition === "Snow"
                        ? "white"
                        : weatherData?.weatherCondition === "Rain" ||
                          weatherData?.weatherCondition === "Drizzle" ||
                          weatherData?.weatherCondition === "Tornado" ||
                          weatherData?.weatherCondition === "Thunderstorm"
                        ? "#81A09A"
                        : weatherData?.weatherCondition === "Sunny" ||
                          weatherData?.weatherCondition === "Mist" ||
                          weatherData?.weatherCondition === "Squall" ||
                          weatherData?.weatherCondition === "Haze" ||
                          weatherData?.weatherCondition === "Clear" ||
                          weatherData?.weatherCondition === "Ash" ||
                          weatherData?.weatherCondition === "fog"
                        ? "#AACDE1"
                        : "#2D8ECB",
                    transitionDuration: "1.2s",
                  }}
                >
                  <svg
                    className="h-[15px] w-[15px] scale-100 text-slate-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </form>
            <LocationList onClick={fetchWeatherDataByClick} />
            <WeatherDetails {...weatherData} />
          </div>
        </div>
      </div>
      {/* </LazyLoadComponent> */}
    </>
  );
};

export default Home;
