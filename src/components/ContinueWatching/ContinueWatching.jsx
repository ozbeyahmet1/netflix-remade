import React, { useState } from "react";
import "./ContinueWatching.css";
import Youtube from "react-youtube";
import continueWatching from "../../images/continueWatching2.png";
import { BsPlayCircle } from "react-icons/bs";

const continueWatchingOpts = {
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

const iconStyle = {
  width: "75px",
  height: "75px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 9,
  cursor: "pointer",
};

function ContinueWatching() {
  const [movieOn, setMovieOn] = useState(true);
  return (
    <div className="continueWatching">
      <div className="continueWatching__block" style={{ display: "flex" }}>
        <div className="continueWatching__banner">
          <img
            className="continueWatching__image"
            src={continueWatching}
            alt=""
          />
        </div>
        <div className="block__movie">
          <div>
            {movieOn ? (
              <>
                <img
                  className="movie__image"
                  src="https://pchocasi.com.tr/wp-content/uploads/2019/07/https___cdn.cnn_.com_cnnnext_dam_assets_190701125354-01-netflix-the-witcher.jpg"
                  alt=""
                />
                <BsPlayCircle
                  className="block__icon"
                  onClick={() => setMovieOn(false)}
                  style={iconStyle}
                />
              </>
            ) : (
              <>
                <div className="movie__image">
                  <Youtube
                    className="movie__image"
                    videoId="bSDKdjLlFxE"
                    opts={continueWatchingOpts}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContinueWatching;
