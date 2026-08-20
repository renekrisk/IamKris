export interface Song {
  title: string;
  artist: string;
  album: string;
  year: string;
  audioUrl: string;
  spotifyUrl: string;
  note?: string;
}

// Kris's Song for the Week
export const mySongForTheWeek: Song = {
  title: "Lights",
  artist: "Ellie Goulding",
  album: "Lights",
  year: "2010",
  audioUrl: "/music/lights.mp3",
  spotifyUrl: "https://open.spotify.com/track/11ozIUBoXAgRTVWelDn4pL",
  note: "This is my go to song this week."
};
