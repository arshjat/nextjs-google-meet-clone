import { ControlsContainer } from "./containers/controlsContainer";
import { ParticipantsGrid } from "./components/participantsGrid";

import { useConnectionManager } from "./hooks/useConnectionManager";
import { useWebRtc } from "./hooks/useWatchRtc";

import { ConnectionManagerProvider } from "@core/connectionManager/contexts";

import { SOCKET_URL, PC_CONFIG } from "./config";

type RoomProps = { roomId: string };

const Room = ({ roomId }: RoomProps) => {
  const { participants, onAction } = useConnectionManager(roomId);
  useWebRtc(roomId);

  return (
    <ControlsContainer onAction={onAction}>
      <ParticipantsGrid participants={participants} onAction={onAction} />
    </ControlsContainer>
  );
};

const Wrapper = (props: RoomProps) => (
  <ConnectionManagerProvider socketUrl={SOCKET_URL} pcConfig={PC_CONFIG}>
    <Room {...props} />
  </ConnectionManagerProvider>
);

export { Wrapper as Room };
