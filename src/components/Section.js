import React from "react";
import "../components/Section.css";

function Section({ img, imgStart, headLine, descText, flex }) {
  return (
    <>
      <div
        className="section"
        style={{
          flexDirection: imgStart ? "row" : "row-reverse",
        }}
      >
        {img !== "" ? <img src={img} alt={img} /> : ""}
        <div className={flex !== null ? `textWrapper ${flex}` : "textWrapper"}>
          <h1>{headLine}</h1>
          <h2>{descText}</h2>
        </div>
      </div>
    </>
  );
}

export default Section;
