import { useContext } from "react";

import { ConnectionManagerContext } from "../connectionManagerContext";
import { ConnectionManager } from "../../ConnectionManager";

export const useConnectionManagerContext = (): ConnectionManager => {
  const connectionManager = useContext<ConnectionManager | null>(
    ConnectionManagerContext
  );

  return connectionManager as ConnectionManager;
};
