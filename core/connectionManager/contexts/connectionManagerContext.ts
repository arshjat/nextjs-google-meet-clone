import { createContext } from "react";

import { ConnectionManager } from "@core/connectionManager";

export const ConnectionManagerContext = createContext<ConnectionManager | null>(
  null
);
