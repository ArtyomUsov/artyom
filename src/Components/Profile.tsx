import React from "react";
import { UserDataType } from "../api/userData";
import styles from "./Profile.module.css";

const Profile = ({
  picture,
  name,
  bio,
  citation,
  hobbies,
}: Omit<UserDataType, "id">) => {
  return (
    <div className={styles.content}>
      <img src={picture} alt="Profile photography" />
      <h3>{name}</h3>
      <p>{bio}</p>
      <h4>"{citation}"</h4>
      <h3>Хобби:</h3>
      <p>{hobbies}</p>
    </div>
  );
};

export default Profile;
