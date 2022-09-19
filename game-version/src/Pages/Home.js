import React from "react";
import Animation from "../components/Animation";


function Home() {
  return (
    <div>
      Welcome
      <div className="App" style={{ display: "flex" }}>
        <div style={{ height: "200px", width: "200px" }}>
          <Animation stage={0}></Animation>
        </div>
        <div style={{ height: "200px", width: "200px" }}>
          <Animation stage={1}></Animation>
        </div>
        <div style={{ height: "200px", width: "200px" }}>
          <Animation stage={2}></Animation>
        </div>
        <div style={{ height: "200px", width: "200px" }}>
          <Animation stage={3}></Animation>
        </div>
        <div style={{ height: "200px", width: "200px" }}>
          <Animation stage={4}></Animation>
        </div>
        <div style={{ height: "200px", width: "200px" }}>
          <Animation stage={5}></Animation>
        </div>
      </div>
    </div>
  );
}

export default Home;
