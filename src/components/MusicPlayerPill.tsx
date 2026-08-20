import React from 'react';
import { useAudio } from '../context/AudioContext';

export const MusicPlayerPill: React.FC = () => {
  const { song, isPlaying, togglePlay } = useAudio();

  return (
    <div className="pt-2 space-y-2">
      <div className="flex flex-wrap items-center gap-3">
        {/* Play/Pause Pill */}
        <button
          onClick={togglePlay}
          type="button"
          className="group inline-flex items-center gap-3 px-3.5 py-2 rounded-full border border-editorial-border/80 bg-paper hover:border-ink/40 transition-all text-left cursor-pointer select-none"
          title={isPlaying ? "Pause music" : "Play my song for the week"}
        >
          {/* Play/Pause Button Icon */}
          <span className="w-5 h-5 rounded-full bg-ink text-paper flex items-center justify-center text-[10px] shrink-0 group-hover:scale-105 transition-transform">
            {isPlaying ? '⏸' : '▶'}
          </span>

          {/* Animated Equalizer Waveform when playing */}
          {isPlaying ? (
            <div className="flex items-end gap-[2px] h-3 shrink-0 px-0.5">
              <span className="w-[2px] bg-ink rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-3" />
              <span className="w-[2px] bg-ink rounded-full animate-[pulse_0.4s_ease-in-out_infinite_0.15s] h-2" />
              <span className="w-[2px] bg-ink rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.3s] h-3.5" />
              <span className="w-[2px] bg-ink rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.2s] h-2" />
            </div>
          ) : (
            <span className="text-xs text-ink-tertiary shrink-0">♫</span>
          )}

          {/* Song Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 font-mono text-[11px] sm:text-xs text-ink-secondary leading-tight">
            <span className="text-ink-tertiary uppercase text-[9px] sm:text-[10px] tracking-wider">
              MY SONG FOR THE WEEK:
            </span>
            <span className="text-ink font-medium">
              "{song.title}" — {song.artist}
            </span>
          </div>
        </button>

        {/* Optional Spotify Link */}
        {song.spotifyUrl && (
          <a
            href={song.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-xs font-mono text-ink-tertiary hover:text-ink transition-colors"
          >
            [ Spotify ↗ ]
          </a>
        )}
      </div>

      {/* Kris's Short Personal Note */}
      {song.note && (
        <p className="text-xs text-ink-tertiary font-mono italic pl-2 border-l border-editorial-border/60">
          "{song.note}"
        </p>
      )}
    </div>
  );
};
