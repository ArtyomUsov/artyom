import React, { useState } from "react";
// import styles from "../App.module.css";
import styles from "./MusicForm.module.css";
import MusicList from "./MusicList";
import MusicFilter from "./MusicFilter";
import { MusicData, MusicDataType } from "../api/MusicData";

const MusicForm = () => {
  const [filteredMusic, setFilteredMusic] =
    useState<MusicDataType[]>(MusicData);

  const handleFilterSubmit = (filter: {
    song: string;
    singer: string;
    genre: string;
  }) => {
    const filtered = MusicData.filter((item) => {
      const matchesSong = item.song
        .toLowerCase()
        .includes(filter.song.toLowerCase());
      const matchesSinger = item.singer
        .toLowerCase()
        .includes(filter.singer.toLowerCase());
      const matchesGenre =
        filter.genre === "" ||
        item.genre.toLowerCase() === filter.genre.toLowerCase();
      return matchesSong && matchesSinger && matchesGenre;
    });
    setFilteredMusic(filtered);
  };

  return (
    <div className={styles.app}>
      <h1>Заявки на Радио</h1>
      <h3>Отправляйте заявку и мы сыграем вашу любимую песню!</h3>
      <div className={styles.form}>
        <MusicFilter onFilterSubmit={handleFilterSubmit} />
        <MusicList music={filteredMusic} />
      </div>
    </div>
  );
};

export default MusicForm;
