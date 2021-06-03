import React from "react";
import { useSelector } from "react-redux";

const Chat = () => {
  const user = useSelector((state) => state.authReducer.user);
  const token = useSelector((state) => state.authReducer.token);

  return (
    <div>
      <h1>Chat Screen</h1>
      <p>Welcome, {user.user.firstName}</p>
      <p>{token}</p>
    </div>
  );
};

export default Chat;
