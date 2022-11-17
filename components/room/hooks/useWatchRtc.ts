import { useEffect } from "react";

export const useWebRtc = (roomId: string) => {
  useEffect(() => {
    const initWatchRtc = async () => {
      const watchRTC = await import("@testrtc/watchrtc-sdk");
      watchRTC.init({
        rtcApiKey: "paste your watch rtc api key here",
        rtcRoomId: roomId,
        console: { level: "error", override: true },
      });
    };

    initWatchRtc();
  }, []);
};
