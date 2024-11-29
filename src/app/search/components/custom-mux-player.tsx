"use client";

import MuxPlayer from "@mux/mux-player-react/lazy";
import { useEffect, useRef } from "react";
import { useMuxVideoStore } from "../hooks/mux-video-store";
import { Volume2Icon, VolumeOffIcon } from "lucide-react";

type Props = {
  playbackId: string;
};

export function CustomMuxPlayerComponent({ playbackId }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMuted, activePlaybackId, toggleMuted, setActivePlaybackId } =
    useMuxVideoStore();

  //   Handle tiktok-like video playing on hover
  useEffect(() => {
    if (videoRef.current) {
      if (activePlaybackId === playbackId) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [activePlaybackId, playbackId]);

  return (
    <div
      className="relative group rounded-lg w-[232px] h-[312px] shrink-0"
      onMouseEnter={() => setActivePlaybackId(playbackId)}
    >
      <MuxPlayer
        ref={videoRef}
        loop
        playsInline
        muted={isMuted}
        loading="viewport"
        streamType="on-demand"
        playbackId={playbackId}
        style={
          {
            aspectRatio: 9 / 16, // without this line, the player will cause a layout shift when it loads
            borderRadius: "8px",
            "--controls": "none",
            "--loading-indicator": "none",
            "--duration-display": "none",
          } as React.CSSProperties
        }
        className="h-[226px] w-[168px] cursor-pointer rounded-lg object-cover md:w-[232px] lg:h-[312px] "
      />
      <button
        role="button"
        aria-label="toggle mute"
        onClick={() => toggleMuted()}
        className="absolute right-2 bottom-2 z-20 hidden size-5 place-items-center rounded-full bg-black/60 group-hover:grid"
      >
        {isMuted ? (
          <VolumeOffIcon className="size-3 text-white" />
        ) : (
          <Volume2Icon className="size-3 text-white" />
        )}
      </button>
    </div>
  );
}
