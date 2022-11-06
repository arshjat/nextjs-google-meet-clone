import { useState, useCallback } from "react";
import { useRouter } from "next/router";

import { v4 } from "uuid";

export const JoinMeeting = () => {
  const { push } = useRouter();
  const [inputRoomId, setInputRoomId] = useState<string>();

  const onNewMeeting = useCallback(() => {
    const newRoomId = v4();
    push(`/room/${newRoomId}`);
  }, [push]);

  const onJoinRoom = useCallback(() => {
    if (!inputRoomId) return;

    push(`/room/${inputRoomId}`);
  }, [push, inputRoomId]);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputRoomId(e.target.value);
    },
    [setInputRoomId]
  );

  return (
    <div className="h-10 flex items-center gap-8 md:w-1/2">
      <button
        type="button"
        className="flex-0 bg-blue-600 text-white w-32 h-10 rounded flex-shrink-0"
        onClick={onNewMeeting}
      >
        New Meeting
      </button>
      <div className="flex-1 flex justify-start gap-0">
        <input
          className="flex-1 bg-white text-gray-500 h-10 flex justify-center items-center border border-gray-400 p-3"
          onChange={handleInput}
          placeholder="Enter a code or link"
        />
        <button
          type="button"
          className="flex-0 w-14 bg-white h-10 rounded-r border border-blue-600 text-blue-600"
          onClick={onJoinRoom}
        >
          Join
        </button>
      </div>
    </div>
  );
};
