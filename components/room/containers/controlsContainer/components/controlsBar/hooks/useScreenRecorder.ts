import { useEffect, useState, useCallback, useMemo } from "react";

//hooks
import { useDownloadMedia } from "./useDownloadMedia";

const MEDIA_RECORDER_EVENTS = {
  DATA_AVAILABLE: "dataavailable",
  ERROR: "error",
};

const getRecorderIconStyles = ({
  isRecorderAvailable,
  isRecording,
}: {
  isRecorderAvailable: boolean;
  isRecording: boolean;
}) => {
  if (isRecorderAvailable) {
    if (isRecording) {
      return {
        color: "green",
        cursor: "pointer",
      };
    }
    return {
      color: "white",
      cursor: "pointer",
    };
  }
  return {
    color: "gray",
    cursor: "not-allowed",
  };
};

const handleError = (e: any) => {
  console.log("An error has ocurred with media recorder: ", { error: e.error });
};

export const useScreenRecorder = (): {
  onAction: any;
  recorderActionStyles: { color: string; cursor: string };
} => {
  const [recorder, setRecorder] = useState<MediaRecorder>();
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const { download, handleNewData } = useDownloadMedia();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        const newRecorderInstance = new MediaRecorder(stream, {
          mimeType: "video/webm",
        });

        setRecorder(newRecorderInstance);
      });
  }, [setRecorder]);

  useEffect(() => {
    if (recorder) {
      recorder.addEventListener(
        MEDIA_RECORDER_EVENTS.DATA_AVAILABLE,
        handleNewData
      );

      recorder.addEventListener(MEDIA_RECORDER_EVENTS.ERROR, handleError);

      return () => {
        recorder.removeEventListener(
          MEDIA_RECORDER_EVENTS.DATA_AVAILABLE,
          handleNewData
        );

        recorder.removeEventListener(MEDIA_RECORDER_EVENTS.ERROR, handleError);
      };
    }
  }, [recorder]);

  const onAction = useCallback(() => {
    if (recorder) {
      if (isRecording) {
        recorder?.stop();
        setIsRecording(false);

        download();
        console.log("Recording is stopped.");
      } else {
        recorder?.start();
        setIsRecording(true);

        console.log("Recording has started.");
      }
    }

    return;
  }, [recorder, setIsRecording, isRecording]);

  const { color, cursor } = useMemo(
    () =>
      getRecorderIconStyles({ isRecorderAvailable: !!recorder, isRecording }),
    [recorder, isRecording]
  );

  return {
    onAction,
    recorderActionStyles: { color, cursor },
  };
};
