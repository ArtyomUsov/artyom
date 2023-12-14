import React from "react";
import styles from "./MusicItem.module.css";
import { MusicDataType } from "../api/MusicData";

const MusicItem = ({ song, singer, genre }: Omit<MusicDataType, "id">) => {
  return (
    <>
      <div className={styles.songList}>
        <div>{song}</div>
        <div>{singer}</div>
        <div>{genre}</div>
      </div>
      <hr />
    </>
  );
};

export default MusicItem;
