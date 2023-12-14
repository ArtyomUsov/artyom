import React from "react";
import styles from "../App.module.css";
import { MusicDataType } from "../api/MusicData";
import MusicItem from "./MusicItem";

const MusicList: React.FC<{ music: MusicDataType[] }> = ({ music }) => {
  return (
    <div className={styles.songList}>
      {music.map((item) => {
        return (
          <MusicItem
            key={item.id}
            song={item.song}
            singer={item.singer}
            genre={item.genre}
          />
        );
      })}
    </div>
  );
};

export default MusicList;
