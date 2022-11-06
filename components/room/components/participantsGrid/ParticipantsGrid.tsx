import { useMemo } from "react";

//components
import { Participant } from "./components/participant";

//constants
import { COUNT_VS_HEIGHT_MAP, COUNT_VS_WIDTH_MAP } from "./constants";

//types
import { Participant as ParticipantType } from "@components/room/types";

type Props = {
  participants: ParticipantType[];
  onAction: any;
};

const calculateDimensionsBasedOnCount = (count: number) => ({
  height: COUNT_VS_HEIGHT_MAP[count] ?? COUNT_VS_HEIGHT_MAP[5],
  width: COUNT_VS_WIDTH_MAP[count] ?? COUNT_VS_WIDTH_MAP[5],
});

export const ParticipantsGrid = ({ participants, onAction }: Props) => {
  const lenParticipants = participants.length;

  const { height, width } = useMemo(
    () => calculateDimensionsBasedOnCount(lenParticipants),
    [lenParticipants]
  );

  return (
    <div className="flex h-full w-full justify-center items-center gap-x-10 flex-wrap">
      {participants.map((participant: ParticipantType) => (
        <Participant
          data={participant}
          key={participant.id}
          height={height}
          width={width}
        />
      ))}
    </div>
  );
};
