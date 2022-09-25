import React, { useEffect, useRef } from "react";
import plant from "../plant.json";
import plantDies from "../plantDies.json";
import Lottie from "lottie-react";

export default function Animation(props) {
  const stage = props.stage;

  let segmentArray = [];
  switch (stage) {
    case 0:
      segmentArray = [0, 8];
      break;
    case 1:
      segmentArray = [8, 26];
      break;
    case 2:
      segmentArray = [26, 50];
      break;
    case 3:
      segmentArray = [50, 95];
      break;
    case 4:
      segmentArray = [70, 0];
      break;
    default:
      segmentArray = [0, 8];
  }

  const lottieRef = useRef();

  useEffect(() => {
    lottieRef.current.setSpeed(0.1);
    lottieRef.current.playSegments(segmentArray, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lottieRef, segmentArray]);

  return (
    <Lottie
        lottieRef={lottieRef}
        animationData={stage === 4 ? plantDies : plant}
        loop={true}
      />
  );
}
