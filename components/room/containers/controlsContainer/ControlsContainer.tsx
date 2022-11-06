import { useMemo } from "react";

import { ControlsBar } from "./components/controlsBar";

//hooks
import { useWindowSize } from "react-use";

export const ControlsContainer = ({ children }: any) => {
  const { width: windowWidth } = useWindowSize();

  const leftOffset = useMemo(() => windowWidth / 2 - 160, [windowWidth]);

  return (
    <div style={{ backgroundColor: "#202124" }}>
      <div className="h-full"> {children}</div>

      <div
        className=" fixed bottom-0 mb-4 h-12 w-80"
        style={{ left: leftOffset }}
      >
        <ControlsBar />
      </div>
    </div>
  );
};
