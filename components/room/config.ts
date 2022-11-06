export const SOCKET_URL = "paste url of your socketio signalling server";

const getTurnServerList = () => {
  const brute_array = [];
  for (let i = 0; i < 256; i++) {
    brute_array.push({
      urls: "turn:192.168." + i + ".1:445?transport=tcp",
      credential: "lobster",
      username: "albino",
    });
  }
  return brute_array;
};

export const PC_CONFIG = {
  iceServers: [
    {
      urls: [
        "stun:stun.l.google.com:19302",
        "stun:stun1.l.google.com:19302",
        "stun:stun2.l.google.com:19302",
        "stun:stun3.l.google.com:19302",
        "stun:stun4.l.google.com:19302",
      ],
    },
    ...getTurnServerList(),
  ],
};
