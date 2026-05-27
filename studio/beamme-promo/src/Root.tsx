import React from "react";
import {Composition} from "remotion";

import {BeamMePromo} from "./Promo";
import {BeamMeSocialCard} from "./SocialCard";
import {BeamMeVerticalPromo} from "./VerticalPromo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BeamMePromo"
        component={BeamMePromo}
        durationInFrames={540}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{}}
      />
      <Composition
        id="BeamMeSocialCard"
        component={BeamMeSocialCard}
        durationInFrames={1}
        fps={30}
        width={1200}
        height={630}
        defaultProps={{}}
      />
      <Composition
        id="BeamMeVerticalPromo"
        component={BeamMeVerticalPromo}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
    </>
  );
};
