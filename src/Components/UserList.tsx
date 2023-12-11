import React from "react";
import { getUserData } from "../api/userData";
import Profile from "./Profile";
import styles from "./UserList.module.css";

export default function UserList() {
  const users = getUserData();
  return (
    <div className={styles.container}>
      {users.map((item) => {
        return (
          <Profile
            key={item.id}
            picture={item.picture}
            name={item.name}
            bio={item.bio}
            citation={item.citation}
            hobbies={item.hobbies}
          />
        );
      })}
    </div>
  );
}
