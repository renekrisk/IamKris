export interface Song {
  title: string;
  artist: string;
  album: string;
  year: string;
  audioUrl: string; // Full length audio track
  spotifyUrl: string;
  note: string; // Short personal note alongside the song
}

// Kris's Song for the Week
export const mySongForTheWeek: Song = {
  title: "Lights",
  artist: "Ellie Goulding",
  album: "Lights",
  year: "2010",
  // Full-length audio stream
  audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3",
  spotifyUrl: "https://open.spotify.com/track/11ozIUBoXAgRTVWelDn4pL",
  note: "The song I've had on repeat all week. Some tracks just hit differently at 2 AM."
};
