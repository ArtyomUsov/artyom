import React, { useState } from "react";
import styles from "../App.module.css";

const MusicFilter = ({ onFilterSubmit }: { onFilterSubmit: (filter: { song: string, singer: string, genre: string }) => void }) => {
    const [song, setSong] = useState("");
    const [singer, setSinger] = useState("");
    const [genre, setGenre] = useState("");
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onFilterSubmit({ song, singer, genre });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.filter}>
          <input
            type="text"
            placeholder="Название песни"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
          <input
            type="text"
            placeholder="Исполнитель"
            value={singer}
            onChange={(e) => setSinger(e.target.value)}
          />
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">Выберите жанр</option>
            <option value="Рок">Рок</option>
            <option value="Поп">Поп</option>
            <option value="Блюз">Блюз</option>
          </select>
          <button type="submit">Отправить</button>
        </div>
      </form>
    );
  };

export default MusicFilter;
