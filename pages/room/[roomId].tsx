import { useRouter } from "next/router";

import { Room } from "@components/room";

export default function () {
  const router = useRouter();
  const { roomId } = router.query;

  if (!roomId) return null; // prevents unnecessary rendering of room component

  return <Room roomId={roomId as string} />;
}
