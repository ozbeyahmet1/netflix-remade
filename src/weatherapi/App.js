import React from "react";
import "./App.css";
import { WEATHER_API_KEY } from "./config";
import TodaysCard from "./components/TodaysCard";
import { hasGeolocationSupport } from "./helpers";
import { BiHome, BiRefresh } from "react-icons/bi";

import Anchor from "./components/Anchor";
// const PERMISSION_DENIED =
//   "An error has been thrown because the location properties could not be activated.";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnDisabled: false,
      darkMode: false,
      fixCity: false,
      geoAccess: null,
      forecasts: [],
    };
    this.coords = null;
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    if (hasGeolocationSupport()) {
      this.fetchTodaysWeather();
      this.onScroll();
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.fixCityBar);
  };

  fetchTodaysWeather = () => {
    navigator.geolocation.getCurrentPosition(
      (c) => {
        this.coords = {
          longitude: c.coords.longitude,
          latitude: c.coords.latitude,
        };
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.coords.latitude}&lon=${this.coords.longitude}&units=metric&APPID=${WEATHER_API_KEY}`
        )
          .then((weather) => weather.json())
          .then((data) => this.setState({ current: data, geoAccess: true }));
      }
      // () => alert(PERMISSION_DENIED)
    );
  };

  onScroll() {
    window.addEventListener("scroll", this.fixCityBar);
  }

  render() {
    const { geoAccess, current, fixCity, btnDisabled, forecasts } = this.state;

    if (geoAccess && current && !!WEATHER_API_KEY) {
      return (
        <>
          <TodaysCard
            emoji={current.weather[0]}
            main={current.main}
            city={current.name}
          />
        </>
      );
    } else {
      return (
        <>
          {!WEATHER_API_KEY && (
            <h1 className="text-center">
              No API-Key given in <i>src\config.js</i>
            </h1>
          )}
          {!geoAccess && (
            <div>
              <h2 className="text-center heading-location-access">
                Welcome Dear Netflix User . To try this feature, please turn on
                location services. We Suggest To Try 🙂📍 . If you wanna try
                this feature,turn on the location services and click the button
                below to refresh the page.
              </h2>
             
            </div>
          )}
          <div className="container center-item">
          <a href="https://netflix-remade.firebaseapp.com/welcome">
                <button className="location__refreshButton" type="">
                  Refresh <BiRefresh />
                </button>
              </a>
            <a href="https://netflix-remade.firebaseapp.com/">
              <button className="location__button" type="">
                Go to Homepage <BiHome />
              </button>
            </a>
          </div>
        </>
      );
    }
  }
}

export default App;
