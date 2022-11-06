import { useCallback, useState } from "react";

const DEFAULT_CHUNKS: Blob[] = [];

export const useDownloadMedia = (): {
  download: any;
  handleNewData: any;
} => {
  const [chunks, setChunks] = useState<Blob[]>(DEFAULT_CHUNKS);

  const handleNewData = useCallback(
    (e: BlobEvent) => {
      if (e.data.size > 0) {
        setChunks((prev) => [...prev, e.data]);
      }
    },
    [setChunks]
  );

  const handleResetChunks = useCallback(() => {
    setChunks(DEFAULT_CHUNKS);
  }, [setChunks]);

  const download = useCallback(() => {
    var blob = new Blob(chunks, {
      type: "video/webm",
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    // @ts-ignore
    a.style = "display: none";
    a.href = url;
    a.download = `Recording_${Date.now()}.webm`;
    a.click();
    window.URL.revokeObjectURL(url);

    handleResetChunks();
  }, [chunks, handleResetChunks]);

  return {
    handleNewData,
    download,
  };
};
