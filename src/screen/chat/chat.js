import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import io from "socket.io-client";

import Connection from "../../../socketConnection";

export default function Example({ navigation, route }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // console.log("parameter", route.params.id);
    // const socket = io("http://192.168.10.87:3000");
    Connection;
    Connection.on("chat message", (msg) => {
      console.log("data pesanku", msg);
      setMessages(msg);
    });
    // setMessages([]);
  }, []);

  const onSend = useCallback((messages = []) => {
    const socket = io("http://192.168.10.87:3000");
    // var pesan = messages.console.log("pesan", messages);

    setMessages((previousMessages) => {
      // console.log(
      //   "data message",
      //   GiftedChat.append(previousMessages, messages),
      // );
      socket.emit(
        "chat message",
        GiftedChat.append(previousMessages, messages),
      );
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      // renderAvatar={false}
      user={{ _id: route.params.id, helo: "bitch" }}
      onSend={(messages) => {
        console.log("pesanku: ", messages);
        onSend(messages);
      }}
    />
  );
}
