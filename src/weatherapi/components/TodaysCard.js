import React from "react";
import { getEmojiClassName } from "./Card";
import Navbar from "../../components/Navbar/Navbar";
import { BsFillCloudHazeFill } from "react-icons/bs";
import { BsFillCloudRainFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { BsFillCloudSnowFill } from "react-icons/bs";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { upperCaseFirst } from "upper-case-first";
const TodaysCard = (props) => {
  const user = useSelector(selectUser);
  const { emoji, main, city } = props;
  const weatherClassName = getEmojiClassName(emoji.main);
  // const weatherClassName = "snow";
  const history = useHistory();
  const mainTemp = Math.round(main.temp);
  return (
    <>
      <div className="weather-wrapper">
        <div>
          {/* CLEAR */}
          {weatherClassName === "clear" && (
            <div>
              <div className="weather-wrapper__block">
                <div className="block__quote">
                  <h1 className="block__text--italic block__text--bigger">
                    "Keep your face always toward the sunshine and shadows will
                    fall behind you."
                  </h1>
                  <BsSun
                    className="block__image bounce-3"
                    style={{ color: "#f9d71c" }}
                  />
                </div>

                <h1 className="block__text">
                Welcome Dear{" "}
                  <span className="block__text--red">{user.email}</span>
                </h1>
                <h1 className="block__text">
                  The sun is smiling in{" "}
                  <span className="block__text--red">{city}</span> sky today. We
                  have prepared movies for you to watch in sunny weather.
                </h1>
              </div>

              <div className="weather__movielist">
                <img
                  className="weather__movie"
                  src="https://tr.web.img4.acsta.net/pictures/20/08/12/16/01/1092483.jpg"
                  alt=""
                />
                <img
                  className="weather__movie"
                  src="https://flxt.tmsimg.com/assets/p17763_p_v10_av.jpg"
                  alt=""
                />
                <img
                  className="weather__movie"
                  src="https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_FMjpg_UX1000_.jpg"
                  alt=""
                />
                <img
                  className="weather__movie"
                  src="https://www.omurokur.com/wp-content/uploads/2014/10/The_Pursuit_of_Happyness.jpg"
                  alt=""
                />
              </div>
            </div>
          )}
          {/*CLEAR ENDS */}

          {/* CLOUDS (OVERCAST/FEW)*/}
          {weatherClassName === "clouds" && (
            <div>
              <div className="weather-wrapper__block">
                <div className="block__quote">
                  <h1 className="block__text--italic block__text--small">
                    "The air up there in the clouds is very pure and fine,
                    bracing and delicious. And why shouldn’t it be?- it is the
                    same the angels breathe. "
                  </h1>
                  <BsFillCloudHazeFill
                    className="block__image bounce-3"
                    style={{ color: "gray" }}
                  />
                </div>

                <h1 className="block__text">
                  Welcome Dear{" "}
                  <span className="block__text--red">{user.email}</span>
                </h1>

                <h1 className="block__text">
                  {upperCaseFirst(`${weatherClassName}`)} seems to cover{" "}
                  <span className="block__text--red">{city}</span>'s sky. We
                  have prepared movies for you to watch in cloudy weather.
                </h1>
              </div>

              <div className="weather__movielist">
                <img
                  className="weather__movie"
                  src="https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_.jpg"
                  alt=""
                />
                <img
                  className="weather__movie"
                  src="https://m.media-amazon.com/images/I/71G7AybM3qL._SL1500_.jpg"
                  alt=""
                />
                <img
                  className="weather__movie"
                  src="https://s3.bukalapak.com/img/8873216162/large/gone_girl_scaled.jpg"
                  alt=""
                />

                <img
                  className="weather__movie"
                  src="https://m.media-amazon.com/images/M/MV5BMTYwNjUxMTYzM15BMl5BanBnXkFtZTYwNjgwMjY3._V1_.jpg"
                  alt=""
                />
              </div>
            </div>
          )}
          {/* CLOUDS ENDS */}

          {/* RAIN */}
          {weatherClassName === "rain" && (
            <div>
              <div className="weather-wrapper__block">
                <div className="block__quote">
                  <h1 className="block__text--small block__text--italic ">
                    " From where we stand the rain seems random. If we could
                    stand somewhere else, we would see the order in it. "
                  </h1>
                  <BsFillCloudRainFill
                    className="block__image bounce-3"
                    style={{ color: "gray" }}
                  />
                </div>

                <h1 className="block__text">
                  Welcome Dear{" "}
                  <span className="block__text--red">{user.email}</span>
                </h1>

                <h1 className="block__text">
                  {upperCaseFirst(`${weatherClassName}`)} seems to cover{" "}
                  <span className="block__text--red">{city}</span>'s sky. We
                  have prepared movies for you to watch in cloudy weather.
                </h1>
              </div>

              <div className="weather__movielist">
                <img
                  className="weather__movie"
                  src="https://m.media-amazon.com/images/M/MV5BMTM0NDQxNjA0N15BMl5BanBnXkFtZTcwNDUwMzcwMg@@._V1_FMjpg_UX1000_.jpg"
                  alt=""
                />
                <img
                  className="weather__movie"
                  src="https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg"
                  alt=""
                />
                <img
                  className="weather__movie"
                  src="https://m.media-amazon.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_.jpg"
                  alt=""
                />

                <img
                  className="weather__movie"
                  src="https://www.sinemaseveranne.com/wp-content/uploads/2021/05/littlemisssunshine.jpg"
                  alt=""
                />
              </div>
            </div>
          )}
          {/* RAIN ENDS */}

          {/* SNOW */}
          {weatherClassName === "snow" && (
            <div>
              <div className="weather-wrapper__block">
                <div className="block__quote">
                  <h1 className="block__text--italic block__text--smaller">
                    “I wonder if the snow loves the trees and fields, that it
                    kisses them so gently? And then it covers them up snug, you
                    know, with a white quilt; and perhaps it says, “Go to sleep,
                    darlings, till the summer comes again.”
                  </h1>

                  <BsFillCloudSnowFill
                    className="block__image bounce-3"
                    style={{ color: "white" }}
                  />
                </div>

                <h1 className="block__text">
                  Welcome Dear{" "}
                  <span className="block__text--red">{user.email}</span>
                </h1>

                <h1 className="block__text">
                  {upperCaseFirst(`${weatherClassName}`)} seems to cover{" "}
                  <span className="block__text--red">{city}</span>'s sky . We
                  have prepared movies for you to watch in cloudy weather.
                </h1>
              </div>

              <div className="weather__movielist">
                <img
                  className="weather__movie"
                  src="https://www.omurokur.com/wp-content/uploads/2019/04/Arctic.jpg"
                  alt=""
                />
                <img
                  className="weather__movie"
                  src="https://images-na.ssl-images-amazon.com/images/I/81Pe38Jn1XL._RI_.jpg"
                  alt=""
                />
                <img
                  className="weather__movie"
                  src="https://www.ace-entertainment.com/wp-content/uploads/2018/03/LE_12_HOMME_B-1-683x1024.jpg"
                  alt=""
                />

                <img
                  className="weather__movie"
                  src="https://m.media-amazon.com/images/M/MV5BMDg3YzgxZjgtNTEzYS00OTg4LTk2MjgtNWMyOTE4MDA4NzJkXkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_.jpg"
                  alt=""
                />
              </div>
            </div>
          )}
          {/* SNOW ENDS */}
        </div>

        <button
          onClick={() => history.push("/")}
          className="weather__button"
          type=""
        >
          <h4>Go to Homepage</h4> 
        </button>
      </div>
    </>
  );
};

// if (weatherLC === 'clouds') {
//   return '☁️';
// } else if (weatherLC === 'rain') {
//   return '🌧️';
// } else if (weatherLC === 'sun') {
//   return t > 0 && t < 6 ? '🌙' : '☀️';
// } else if (weatherLC === 'clear') {
//   return t > 0 && t < 6 ? '🌙' : '☀️'; // "🌈" "🌌";
// } else if (weatherLC === 'snow') {
//   return '❄️';
// } else if (weatherLC === 'extreme') {
//   return '🌩️';
// }
export default TodaysCard;
