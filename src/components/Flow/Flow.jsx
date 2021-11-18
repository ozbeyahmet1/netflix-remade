import React from "react";
import "./Flow.css";

const Flow = ({ img, text, headline, imagePosition }) => {


  const Left = (
    <>
      <div>
        <img
          className={`flow__image ${
            imagePosition == "right" ? "flow__image--right" : "flow__image--left"
          }`}
          src={img}
          alt=""
        />
      </div>
      <div
        className={`flow__text ${
          imagePosition == "right" ? "flow__text--left" : "flow__text--right"
        }`}
      >
        <h1>{headline}</h1>
        <h3 className="flow__text--small">{text}</h3>
      </div>
    </>
  );



  const Right = (
    <>
      <div
        className={`flow_text ${
          imagePosition == "right" ? "flow__text--left" : "flow__text--right"
        }`}
      >
        <h1 className="flow_text__headline">{headline}</h1>
        <h3 className="flow__text--small">{text}</h3>
      </div>
      <div>
        <img
          className={`flow__image ${
            imagePosition == "right" ? "flow__image--right" : "flow__image--left"
          }`}
          src={img}
          alt=""
        />
      </div>
    </>
  );



  return (
    <div className="flow">
      <div className="flow__mainarea">
        {imagePosition == "right" ? [Left] : [Right]}
      </div>
    </div>
  );
};

export default Flow;
