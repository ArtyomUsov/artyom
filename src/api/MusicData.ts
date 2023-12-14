export const MusicData: MusicDataType[] =[
    {
      id: 1,
      song: "Bogemian Rhapsody",
      singer: "Queen",
      genre: "Рок",
    },
    {
      id: 1,
      song: "Shape of You",
      singer: "Ed Sheeran",
      genre: "Поп",
    },
    {
      id: 1,
      song: "Uptown Funk",
      singer: "Mark Ronson ft. Bruno Mars",
      genre: "Поп",
    },
    {
      id: 1,
      song: "Rolling in the Deep",
      singer: "Adele",
      genre: "Блюз",
    },
    {
      id: 1,
      song: "Blinding Lights",
      singer: "The Weeknd",
      genre: "Поп",
    },
  ];


export type MusicDataType = {
  id: number;
  song: string;
  singer: string;
  genre: string;
};

