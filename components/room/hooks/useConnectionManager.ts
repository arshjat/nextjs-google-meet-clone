import { useEffect, useState, useCallback } from "react";

//hooks
import { useConnectionManagerContext } from "@core/connectionManager/contexts";

//types
import { COMMUNICATION_MANAGER_EVENTS } from "@core/connectionManager/types";
import {
  Participant,
  NewParticipantEvent,
  RemoveParticipantEvent,
} from "../types";

export const useConnectionManager = (roomId: string) => {
  const connectionManager = useConnectionManagerContext();

  const [participants, setParticipants] = useState<Participant[]>([]);

  const handleAddParticipant = useCallback(
    (e: NewParticipantEvent) => {
      setParticipants((prev: Participant[]) => [...prev, e.detail.participant]);
    },
    [setParticipants]
  );

  const handleRemoveParticipant = useCallback(
    (e: RemoveParticipantEvent) => {
      setParticipants((prev) =>
        prev.filter((participant) => participant.id !== e.detail.participantId)
      );
    },
    [setParticipants]
  );

  useEffect(() => {
    connectionManager.init(roomId);

    connectionManager.addEventListener(
      COMMUNICATION_MANAGER_EVENTS.ADD_PARTICIPANT,
      handleAddParticipant as EventListener
    );
    connectionManager.addEventListener(
      COMMUNICATION_MANAGER_EVENTS.REMOVE_PARTICIPANT,
      handleRemoveParticipant as EventListener
    );

    return () => {
      connectionManager.removeEventListener(
        COMMUNICATION_MANAGER_EVENTS.ADD_PARTICIPANT,
        handleAddParticipant as EventListener
      );
      connectionManager.removeEventListener(
        COMMUNICATION_MANAGER_EVENTS.REMOVE_PARTICIPANT,
        handleRemoveParticipant as EventListener
      );

      connectionManager.destroy();
    };
  }, []);

  return { participants, onAction: undefined };
};
