export type Participant = {
  id: string;
  name: string;
  stream: MediaStream;
};

export type NewParticipantEvent = CustomEvent<{ participant: Participant }>;
export type RemoveParticipantEvent = CustomEvent<{ participantId: string }>;
