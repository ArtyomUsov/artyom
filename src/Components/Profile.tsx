import React from "react";
// import React, { useState } from "react";
import { UserDataType } from "../api/userData";

const Profile = ({
  picture,
  name,
  bio,
  citation,
  hobbies,
}: Omit<UserDataType, "id">) => {
  // const [currentCount, setCurrentCount] = useState(count);

  // const decrementCount = () => {
  //   if (currentCount) {
  //     setCurrentCount(currentCount - 1);
  //   } else {
  //     alert("Товар закончился");
  //   }
  // };
  return (
    // <div className={s.container}>
    <div>
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>{bio}</p>
      <h4>{citation}</h4>
      <h3>Хобби:</h3>
      <p>{hobbies}</p>
      {/* <button onClick={decrementCount}></button> */}
    </div>
  );
};

export default Profile;
