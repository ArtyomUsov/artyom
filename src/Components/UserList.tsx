import React from "react";
import { getUserData } from "../api/userData";
import Profile from "./Profile";

export default function UserList() {
  const users = getUserData();
  return (
    <div>
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
