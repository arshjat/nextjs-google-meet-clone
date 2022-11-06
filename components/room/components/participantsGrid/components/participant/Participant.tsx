import { useEffect, useRef } from "react";

//types
import { Participant as ParticipantType } from "@components/room/types";

type Props = {
  data: ParticipantType;
  height: string;
  width: string;
};

export const Participant = (props: Props) => {
  const videoElRef = useRef<HTMLVideoElement>();

  const { height, width, data } = props;
  const { name, stream } = data;

  useEffect(() => {
    if (videoElRef.current) {
      videoElRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div
      className="box-border border-2 border-zinc-600 rounded-l relative overflow-hidden"
      style={{ height, width }}
    >
      <video
        className="block h-full w-full object-cover	"
        autoPlay
        playsInline
        style={{ transform: "rotateY(180deg)" }}
        ref={videoElRef as any}
      />
      <div className="absolute bottom-1 right-2 text-zinc-400">{name}</div>
    </div>
  );
};
