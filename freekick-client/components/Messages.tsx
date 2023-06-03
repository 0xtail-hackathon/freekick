import React from "react";
import type { Message } from "../interfaces";

interface MessagesProps {
  messages: Array<Message>;
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div className="pt-8 hidden">
      {messages.map((message, i) => (
        <p key={i} className={message.premium ? "is-premium" : ""}>
          <strong>{message.sender}</strong>:<br />
          {message.text}
        </p>
      ))}
    </div>
  );
};

export default Messages;
