import React from "react";
import {Composition} from "remotion";

import {AgentExportPromo} from "./Promo";
import {AgentExportSocialCard} from "./SocialCard";
import {AgentExportVerticalPromo} from "./VerticalPromo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AgentExportPromo"
        component={AgentExportPromo}
        durationInFrames={540}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{}}
      />
      <Composition
        id="AgentExportSocialCard"
        component={AgentExportSocialCard}
        durationInFrames={1}
        fps={30}
        width={1200}
        height={630}
        defaultProps={{}}
      />
      <Composition
        id="AgentExportVerticalPromo"
        component={AgentExportVerticalPromo}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
    </>
  );
};
