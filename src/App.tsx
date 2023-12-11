import React from "react";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <h1>Заявки на Радио</h1>
      <h3>Отправляйте заявку и мы сыграем вашу любимую песню!</h3>
      <form>
        <input type="text" placeholder="Название песни" />
        <input type="text" placeholder="исполнитель" />
        <select>
          <option value="rock">Рок</option>
          <option value="pop">Поп</option>
          <option value="hip-hop">Блюз</option>
        </select>
        <button type="submit">Отправить</button>
        <div className={styles.songList}>
          <p>Песня 1 - Исполнитель 1 - Жанр 1</p>
          <hr />
          <p>Песня 2 - Исполнитель 2 - Жанр 2</p>
          <hr />
          <p>Песня 1 - Исполнитель 1 - Жанр 1</p>
          <hr />
          <p>Песня 2 - Исполнитель 2 - Жанр 2</p>
          <hr />
          <p>Песня 1 - Исполнитель 1 - Жанр 1</p>
          <hr />
          <p>Песня 2 - Исполнитель 2 - Жанр 2</p>
          <hr />
        </div>
      </form>
    </div>
  );
}
