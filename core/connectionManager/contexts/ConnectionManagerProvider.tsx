import { ReactNode } from "react";
import _once from "lodash/once";

import { ConnectionManager } from "@core/connectionManager";

import { ConnectionManagerContext } from "./connectionManagerContext";

const getConnectionManagerInstance = _once(
  ({ socketUrl, pcConfig }): ConnectionManager =>
    new ConnectionManager({ socketUrl, pcConfig })
);

type Props = {
  children: ReactNode;
  socketUrl: string;
  pcConfig: Record<string, any>;
};

export const ConnectionManagerProvider = ({
  children,
  socketUrl,
  pcConfig,
}: Props) => {
  const connectionManagerInstance = getConnectionManagerInstance({
    socketUrl,
    pcConfig,
  });

  return (
    <ConnectionManagerContext.Provider value={connectionManagerInstance}>
      {children}
    </ConnectionManagerContext.Provider>
  );
};
